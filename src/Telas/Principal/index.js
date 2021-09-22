import React from 'react';
import { FlatList, Text, View } from "react-native";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import estilos from '../estilos';
import Posts from '../../Componentes/Posts';
import Stories from '../../Componentes/Stories';
import { posts } from '../../Dados/data';
import { useNavigation } from '@react-navigation/native';

export default function Principal() {
    const navigation = useNavigation();

    return <>

        {/* InstaDog e icones */}
        <View style={estilos.cabecalho}>
            <Text style={estilos.tituloCabecalho}>InstaDog</Text>
            <FAIcon name="plus-square-o" style={estilos.icones} />
            <MCIcons name="heart-outline" style={estilos.icones} />
            <Ionicons name="chatbubble-ellipses-outline" style={estilos.icones} onPress={()=>{navigation.navigate("Chat")}}/>
        </View>

        <Stories fonte={posts} />

        {/* Postagens */}
        <View style={estilos.posts}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Posts {...item} />}
                keyExtractor={({ id }) => String(id)}
            ></FlatList>
        </View>
    </>
}

