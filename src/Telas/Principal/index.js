import React from 'react';
import { FlatList, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import estilos from '../estilos';
import Posts from '../../Componentes/Posts';
import Stories from '../../Componentes/Stories';

function checkStatus(response){
    if(response.ok){
      return Promise.resolve(response);
    }else{
      return Promise.reject(new Error(response.statusText));
    }
  }


function getRandomDoggo(){
   
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(response => response.message )
      .catch(err => console.error(err));
  }

const posts = [
    {
        id: 1,
        username: "doguinho01",
        icone: "../../../assets/icon.png",
        postagem: getRandomDoggo(),
    },
    {
        id: 2,
        username: "doguinho02",
        icone: "",
        postagem: getRandomDoggo(),
    },
    {
        id: 3,
        username: "doguinho03",
        icone: "",
        postagem: getRandomDoggo(),
    },
    {
        id: 4,
        username: "doguinho04",
        icone: "",
        postagem: getRandomDoggo(),
    },
    {
        id: 5,
        username: "doguinho05",
        icone: "",
        postagem: getRandomDoggo(),
    },
]
export default function Principal() {
    return <>
        <View style={estilos.cabecalho}>
            <Text style={estilos.tituloCabecalho}>InstaDog</Text>
            <Icon name="plus-square-o" style={estilos.icones} />
            <Icon name="heart-o" style={estilos.icones} />
            <Icon name="commenting-o" style={estilos.icones} />
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

