import React, { useEffect, useState, useRef } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView, Image, View, TextInput } from "react-native";
import { cores } from '../../estilosGlobal';
import estilos from './estilos';
import estilosTelas from "../estilos";
import { Video } from 'expo-av';

export default function Pesquisa() {
    const [imagem, setImagem] = useState("");
    const [raca, setRaca] = useState("");
    let pos = -1;

    useEffect(() => {
        randomDog()
    }, [])

    const randomDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random/20')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }

    const pesquisaRaca = () => {
        if (raca == "") { randomDog() } else {
            fetch('https://dog.ceo/api/breed/' + raca + '/images/random/20')
                .then(response => response.json())
                .then(response => {
                    setImagem(response.message);
                })
                .catch(err => console.error(err));
        }
    }

    function myVideo() {
        return <>
            <Video
                style={estilos.video}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                isLooping
                isMuted
                resizeMode="cover"
                shouldPlay
            />
        </>
    }

    function myPhoto() {
        pos++;
        return <>
            <Image style={estilos.fotos} source={{ uri: imagem[pos] }} />
        </>
    }

    return <>
        <ScrollView style={{ flex: 2, backgroundColor: cores.fundoPadrao }}>
            <View style={{ backgroundColor: cores.fundoPadrao, zIndex: 1, height: 60, justifyContent: "center" }}>
                <TextInput
                    placeholder="Pesquisa"
                    placeholderTextColor={cores.cinza}
                    style={estilosTelas.input}
                    selectTextOnFocus
                    onChangeText={(pesquisa) => { setRaca(pesquisa.toLowerCase()) }}
                    onEndEditing={() => pesquisaRaca()}
                />
            </View>
            <Grid>
                <Col>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myVideo()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {myVideo()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myVideo()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                    <Row>
                        {myPhoto()}
                    </Row>
                </Col>
            </Grid>
        </ScrollView>
    </>
}