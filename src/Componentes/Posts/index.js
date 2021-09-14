import React, {useEffect, useState} from 'react';
import { Text, Image, View, FlatList } from 'react-native'
import estilos from './estilos';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/Feather';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function pressHeart(){
    if(press == "heart-outline"){
        press = "heart";
    } else (press = "heart-outline")
    return press
}

export default function Posts({ id, username }) {
    const [imagem, setImagem] = useState("");
    
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
            <Image style={estilos.userPhoto} source={{uri: imagem[id]}} />
            <Text style={estilos.userName}>{username}</Text>
        </View>
        <Image style={estilos.postagem} source={{uri: imagem[id]}} />
        <View style={estilos.flexArea}>
            <MCIcons name="heart-outline" style={estilos.icones} />
            <Ionicons name="chatbubble-outline" style={estilos.icones} />
            <FIcons name="send" style={estilos.icones} />
            <View style={{ alignItems: "flex-end", flex: 0.7 }}>
                <FAIcon name="bookmark-o" style={estilos.saveIcon} />
            </View>
        </View>
        <Text style={estilos.nameCaption}>
            {username}
            <Text style={{fontWeight: "normal"}}> eis aqui um doquinho super fofo</Text>
        </Text>
    </>
}