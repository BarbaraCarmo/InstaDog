import React from 'react';
import { Image, View, FlatList, Text } from 'react-native';
import estilos from './estilos';


const stories = [
    {
        id: 1,
        name: "dodge01",
        icone: "../../../assets/icon.png",
    },
    {
        id: 2,
        name: "dodge02",
        icone: "",
    },
    {
        id: 3,
        name: "dodge03",
        icone: "",
    },
    {
        id: 4,
        name: "dodge04",
        icone: "",
    },
    {
        id: 5,
        name: "dodge05",
        icone: "",
    },
    {
        id: 6,
        name: "dodge06",
        icone: "../../../assets/icon.png",
    },
    {
        id: 7,
        name: "dodge07",
        icone: "",
    },
]

function Icones(id, name, icone) {
    return <View >
        <Image style={estilos.userPhoto} source={require("../../../assets/dog.jpg")} />
        <Text style={estilos.userName}>name</Text>
    </View>
}

export default function Stories() {
    return <>
        <View style={estilos.stories}>
            <FlatList
                horizontal
                data={stories}
                renderItem={({ item }) => <Icones {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </View>
    </>
}