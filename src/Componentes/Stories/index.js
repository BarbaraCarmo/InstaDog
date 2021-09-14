import React, {useEffect, useState} from 'react';
import { Image, View, FlatList, Text } from 'react-native';
import estilos from './estilos';
import { posts } from '../../Dados/data';

export default function Stories() {
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/15')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    function Icones({ id, username }) {
        return <View >
            <Image style={estilos.userPhoto} source={{uri: imagem[id]}} />
            <Text style={estilos.userName}>{username}</Text>
        </View>
    }

    return <>
        <View style={estilos.stories}>
            <FlatList
                horizontal
                data={posts}
                renderItem={({ item }) => <Icones {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </View>
    </>
}