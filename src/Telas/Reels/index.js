import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, View, Text, Image } from "react-native";
import estilos from './estilos';
import { Video } from 'expo-av';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcons from 'react-native-vector-icons/Feather';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { posts } from '../../Dados/data';

export default function Reels() {
    const [coracao, setCoracao] = useState("heart-outline");
    const [imagem, setImagem] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/7')
            .then(response => response.json())
            .then(response => {
                setImagem(response.message);
            })
            .catch(err => console.error(err));
    }, [])

    function myVideo() {
        return <>
            <Video
                style={{ width: 420, height: 615 }}
                source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                isLooping
                isMuted
                resizeMode="cover"
                shouldPlay
            />
        </>
    };

    const onClickHeart = () => {
        if (coracao == "heart-outline") {
            setCoracao("heart");
        } else { setCoracao("heart-outline") }
    };

    function reel(id) {
        return <>
            <View>
                <View style={{ position: 'absolute', top: 370, left: 360, zIndex: 1 }}>
                    <MCIcons name={coracao} style={estilos.icones} onPress={onClickHeart} />
                    <Text style={estilos.numeros}>54 mil</Text>
                    <Ionicons name="chatbubble-outline" style={estilos.icones} />
                    <Text style={estilos.numeros}>126</Text>
                    <FIcons name="send" style={estilos.icones} />
                    <MCIcons name="dots-horizontal" style={estilos.icones} />
                </View>
                <View style={{ position: 'absolute', top: 490, left: 10, zIndex: 1,}} >
                    <View style={{ flex: 2, flexDirection: "row", }}>
                        <Image style={estilos.userPhoto} source={{ uri: imagem[id] }} />
                        <Text style={estilos.userName}>{posts[id].name}</Text>
                    </View>
                    <Text style={estilos.descricao}>Jais aqui a descrição do reels</Text>
                    <Text style={estilos.musica}>Musiquinha ou aúdio que está passando</Text>
                </View>
                {myVideo()}
            </View>
        </>
    };

    return <>
        <ScrollView>
            {reel(id=0)}
            {reel(id=1)}
            {reel(id=3)}
            {reel(id=4)}
            {reel(id=5)}
        </ScrollView>
    </>
}