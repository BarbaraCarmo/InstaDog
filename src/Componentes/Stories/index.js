import React, { useEffect, useState } from 'react';
import { Image, View, FlatList, Text } from 'react-native';
import estilos from './estilos';
import { posts, stories } from '../../Dados/data';

export default function Stories({fonte}) {
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/15')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    function Icones({ id, name }) {
        return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 2 }} >
            <Image style={estilos.userPhoto} source={{ uri: imagem[id] }} />
            <Text numberOfLines={1} ellipsizeMode='tail' style={estilos.userName}>{((name).length > 12) ?
                (((name).substring(0, 12 - 3)) + '...') :
                name}</Text>
        </View>
    }

    return <>
        <View style={estilos.stories}>
            <FlatList
                horizontal
                data={fonte}
                renderItem={({ item }) => <Icones {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </View>
    </>
}