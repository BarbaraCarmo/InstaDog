import React, { useEffect, useState } from 'react';
import { Image, Text, View, FlatList, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import estilosTelas from '../estilos';
import estilos from './estilos';
import { cores } from '../../estilosGlobal';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import { posts } from '../../Dados/data';

export default function Chat() {
    const navigation = useNavigation();
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/15')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    function Pessoas({ id, name }) {
        return <>
            <View style={estilos.cabecalho}>
                <Image style={estilos.userPhoto} source={{ uri: imagem[id] }} />
                <View style={{ flex: 4, justifyContent: "center", marginLeft: 5 }}>
                    <Text style={estilos.userName}>{name}</Text>
                    <Text style={{ color: cores.cinza, paddingBottom: 10 }}>Online há {id} horas</Text>
                </View>
                <Ionicons name="camera-outline" style={estilos.camera} />
            </View>
        </>
    }

    return <>

        <View style={estilos.cabecalho}>
            <MIcons name="arrow-back-ios" style={estilos.voltar} onPress={() => { navigation.navigate("Principal") }} />
            <Text style={estilos.tituloCabecalho}>gudan_ohusky</Text>
            <Ionicons name="list" style={estilosTelas.icones} />
            <FAIcon name="edit" style={estilosTelas.icones} />

        </View>

        <View style={estilos.cabecalho}>
            <Text style={estilos.textoAtivo}>Principal</Text>
            <Text style={estilos.textoInativo}>     Geral</Text>
            <Text style={estilos.textoInativo}>Solicitações</Text>
        </View>

        <View style={{ backgroundColor: cores.fundoPadrao, zIndex: 1, height: 70 }}>
            <TextInput
                placeholder="Pesquisa"
                placeholderTextColor={cores.cinza}
                style={estilosTelas.input}
                selectTextOnFocus
                editable={false}
            />
        </View>

        <FlatList
            data={posts}
            renderItem={({ item }) => <Pessoas {...item} />}
            keyExtractor={({ id }) => String(id)}
        ></FlatList>



    </>
}
