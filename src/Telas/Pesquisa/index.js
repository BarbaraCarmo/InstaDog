import React, { useEffect, useState } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Button, ScrollView, Image, Text, View, TextInput } from "react-native";
import { cores } from '../../estilosGlobal';
import estilos from './estilos';

export default function Pesquisa() {
    let i = 0;
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
        <View style={{ flex: 1, backgroundColor: cores.fundoPadrao }}>
            <TextInput
                placeholder= "Pesquisa"
                style={estilos.input}
                
            />
        </View>
    </>
}