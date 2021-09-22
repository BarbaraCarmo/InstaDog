import React, { useEffect, useState } from 'react';
import { Image, Text, View, Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import estilosTelas from '../estilos';
import estilos from "./estilos"
import { cores } from '../../estilosGlobal';
import MAIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { posts } from '../../Dados/data';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView } from 'react-native-gesture-handler';


export default function Adote() {
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/20')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    return <>

        <View style={estilos.cabecalho}>
            <Text style={estilos.tituloCabecalho}>Adoção</Text>
            <MAIcons name="book-multiple-outline" style={estilosTelas.icones} />
            <MAIcons name="menu" style={estilosTelas.icones} />

        </View>



        <View style={{ backgroundColor: cores.fundoPadrao, zIndex: 1, height: 60 }}>
            <TextInput
                placeholder="Pesquisa"
                placeholderTextColor={cores.cinza}
                style={estilosTelas.input}
                selectTextOnFocus
                editable={false}
            />
        </View>
        <View style={estilos.cabecalho}>
            <View style={estilos.botao}>
                <Button color={cores.fundoPadrao} title="Escolha seu doguinho" />
            </View>
            <View style={estilos.botao}>
                <Button color={cores.fundoPadrao} title="Adote" />
            </View>
            <View style={estilos.botao}>
                <Button color={cores.fundoPadrao} title="Amigos peludos" />
            </View>
        </View>

        <ScrollView style={{ backgroundColor: cores.fundoPadrao }}>
            <Grid>
                <Col>
                    <Row>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[0] }} /></Col>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[1] }} /></Col>
                    </Row>
                    <Row>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[2] }} /></Col>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[3] }} /></Col>
                    </Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[4] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[5] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[6] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[7] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[8] }} /></Row>
                </Col>
                <Col>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[9] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[10] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[11] }} /></Row>
                    <Row>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[12] }} /></Col>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[13] }} /></Col>
                    </Row>
                    <Row>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[14] }} /></Col>
                        <Col><Image style={estilos.imagemPequena} source={{ uri: imagem[15] }} /></Col>
                    </Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[16] }} /></Row>
                    <Row><Image style={estilos.imagemMaior} source={{ uri: imagem[17] }} /></Row>

                </Col>
            </Grid>
        </ScrollView>

    </>
}
