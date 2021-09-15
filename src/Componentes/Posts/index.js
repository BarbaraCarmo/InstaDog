import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native'
import estilos from './estilos';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/Feather';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Posts({ id, name }) {
    const [imagem, setImagem] = useState("");
    const [coracao, setCoracao] = useState("heart-outline");

    const onClickHeart = () => {
        if (coracao == "heart-outline") {
            setCoracao("heart");
        } else { setCoracao("heart-outline") }
    };

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/15')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    return <>
        <View style={estilos.flexArea}>
            <Image style={estilos.userPhoto} source={{ uri: imagem[id] }} />
            <Text style={estilos.userName}>{name}</Text>
        </View>
        <Image style={estilos.postagem} source={{ uri: imagem[id] }} />
        <View style={estilos.flexArea}>
            <MCIcons name={coracao} style={estilos.icones} onPress={onClickHeart} />
            <Ionicons name="chatbubble-outline" style={estilos.icones} />
            <FIcons name="send" style={estilos.icones} />
            <View style={{ alignItems: "flex-end", flex: 0.7 }}>
                <FAIcon name="bookmark-o" style={estilos.saveIcon} />
            </View>
        </View>
        <Text style={estilos.nameCaption}>
            {name}
            <Text style={{ fontWeight: "normal" }}> eis aqui um doquinho super fofo</Text>
        </Text>
    </>
}