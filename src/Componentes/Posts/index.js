import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native'
import estilos from './estilos';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/Feather';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Posts({ id, name }) {
    const [imagem, setImagem] = useState("");
    const [coracao, setCoracao] = useState("heart-outline");
    const [controle, setControle] = useState(false);
    let count = 0;

    const onClickHeart = () => {
        if (coracao == "heart-outline") {
            setCoracao("heart");
            setControle(true);
            setTimeout(() => { setControle(false) }, 1500);

        } else { setCoracao("heart-outline"); setControle(false); }
    };
    const duploClick = () => {
        count++;
        if (count == 2) {
            count = 0;
            setControle(true);
            setCoracao("heart");
            setTimeout(() => { setControle(false) }, 1500);
        }
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
        <TouchableWithoutFeedback
            onPress={() => {
                duploClick();
            }}>
            <View style={estilos.flexArea}>
                <Image style={estilos.userPhoto} source={{ uri: imagem[id] }} />
                <Text style={estilos.userName}>{name}</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image style={estilos.postagem} source={{ uri: imagem[id] }} />
                {controle && <View style={estilos.mascaraLike}>
                    <MCIcons name="heart" style={estilos.iconeLike} />
                </View>}

            </View>
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
        </TouchableWithoutFeedback>
    </>
}