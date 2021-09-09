import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacityBase, View } from "react-native";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import estilos from '../estilos';
import Posts from '../../Componentes/Posts';
import Stories from '../../Componentes/Stories';
import { posts } from '../../Dados/data';

var press = "heart-outline";

function getRandomDoggo() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(response => {

            return (response.message)
        })
        .catch(err => console.error(err));
}

export default function Principal() {
    return <>
        <View style={estilos.cabecalho}>
            <Text style={estilos.tituloCabecalho}>InstaDog</Text>
            <FAIcon name="plus-square-o" style={estilos.icones} />
            <MCIcons name="heart-outline" style={estilos.icones} />
            <Ionicons name="chatbubble-ellipses-outline" style={estilos.icones} />
        </View>
        <Stories />
        <View style={estilos.posts}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Posts {...item} />}
                keyExtractor={({ id }) => String(id)}
            ></FlatList>
        </View>
    </>
}

