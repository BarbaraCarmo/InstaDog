import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Image, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ADIcons from 'react-native-vector-icons/AntDesign';
import { cores } from '../../estilosGlobal';
import estilos from './estilos';
import estilosTelas from '../estilos';
import Stories from '../../Componentes/Stories';
import { stories } from '../../Dados/data';

export default function Perfil() {
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/husky/images/random/30')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    function Colunas(pos) {
        return <>
            <Col style={{ alignItems: "center" }}>
                <Row><Image style={estilos.fotosFeed} source={{ uri: imagem[pos] }} /></Row>
                <Row><Image style={estilos.fotosFeed} source={{ uri: imagem[pos + 1] }} /></Row>
                <Row><Image style={estilos.fotosFeed} source={{ uri: imagem[pos + 2] }} /></Row>
                <Row><Image style={estilos.fotosFeed} source={{ uri: imagem[pos + 3] }} /></Row>
                <Row><Image style={estilos.fotosFeed} source={{ uri: imagem[pos + 4] }} /></Row>
                <Row><Image style={estilos.fotosFeed} source={{ uri: imagem[pos + 5] }} /></Row>
            </Col>
        </>
    }

    return <>


        <ScrollView style={{ flex: 2, backgroundColor: cores.fundoPadrao }}>
            {/* Nome, add e menu */}
            <View style={estilos.flexArea}>
                <Text style={estilosTelas.tituloCabecalho}>gudan_ohusky</Text>
                <FAIcon name="plus-square-o" style={estilosTelas.icones} />
                <Ionicons name="menu" style={estilosTelas.icones} />
            </View>

            {/* Foto de usuário e números */}
            <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: cores.fundoPadrao }}>
                <Image style={estilos.userPhoto} source={{ uri: imagem[0] }} />
                <ADIcons name="pluscircle" style={estilos.plusIcon} />
                <View style={estilos.infosNumeros}>
                    <Text style={estilos.numeros}>484</Text>
                    <Text style={estilos.legendaNums}>Publicações</Text>
                </View>
                <View style={estilos.infosNumeros}>
                    <Text style={estilos.numeros}>1,1M</Text>
                    <Text style={estilos.legendaNums}>Seguidores</Text>
                </View>
                <View style={estilos.infosNumeros}>
                    <Text style={estilos.numeros}>169</Text>
                    <Text style={estilos.legendaNums}>Seguindo</Text>
                </View>
            </View>

            {/* Informações do usuário */}
            <View style={estilos.infosPerfil}>
                <Text style={estilos.userName}>GUDANZINHO</Text>
                <Text style={estilos.categoria}>Celebridade</Text>
                <Text style={estilos.descricao}>Imperador Modo Turbo</Text>
                <Text style={estilos.descricao}>+6,9M TixTox</Text>
            </View>

            {/* Botão editar perfil */}
            <View style={{ backgroundColor: cores.fundoPadrao }}>
                <View style={estilos.editaPerfil}>
                    <Button color={cores.branco} title="Editar Perfil" />
                </View>
            </View>

            {/* Destaques */}
            <View style={{ flex: 0.3 }}>
                <Stories fonte={stories} />
            </View>

            {/* Icones feed, reels, igtv */}
            <View style={estilos.flexArea}>
                <Ionicons name="apps-sharp" style={estilos.iconesFeed} />
                <MCIcons name="play-box-multiple-outline" style={estilos.iconesFeed} />
                <Ionicons name="play-outline" style={estilos.iconesFeed} />
                <MCIcons name="tag-heart-outline" style={estilos.iconesFeed} />
            </View>

            {/* Grade de fotos */}
            <Grid>
                {Colunas(pos = 0)}
                {Colunas(pos = 6)}
                {Colunas(pos = 12)}
            </Grid>
        </ScrollView>
    </>
}

