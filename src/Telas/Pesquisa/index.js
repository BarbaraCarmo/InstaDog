import React, { useEffect, useState } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { ScrollView, Image, Text, View, TextInput } from "react-native";
import { cores } from '../../estilosGlobal';
import estilos from './estilos';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Pesquisa() {
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/20')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    const pesquisaRaca = (pesquisa) => {
        console.log(pesquisa);
        fetch('https://dog.ceo/api/breed/' + pesquisa + '/images/random')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }

    return <>
        <View style={{ flex: 0.1, backgroundColor: cores.fundoPadrao }}>
            <TextInput
                placeholder="Pesquisa"
                placeholderTextColor={cores.cinza}
                style={estilos.input}
                selectTextOnFocus
                onChangeText={(pesquisa) => { pesquisaRaca(pesquisa.toLowerCase()) }}
            />
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: cores.fundoPadrao }}>
            <Grid>
                <Col>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[0] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[1] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[2] }} />
                    </Row>
                    <Row>
                        <YoutubePlayer height={272}
                            width={135}
                            margin={1}
                            play={true}
                            videoId={'84WIaK3bl_s'} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[3] }} />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[4] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[5] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[6] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[7] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[8] }} />
                    </Row>
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[9] }} />
                    </Row>
                </Col>
                <Col>
                    <Image style={{ width: 135, height: 272, margin: 1 }} source={{ uri: imagem[1] }} />
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[10] }} />
                    </Row>
                    <Image style={{ width: 135, height: 272, margin: 1 }} source={{ uri: imagem[1] }} />
                    <Row>
                        <Image style={estilos.fotos} source={{ uri: imagem[11] }} />
                    </Row>
                </Col>
            </Grid>
        </ScrollView>
    </>
}