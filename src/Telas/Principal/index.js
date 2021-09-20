import React from 'react';
import { FlatList, ScrollView, Text, View } from "react-native";
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import estilos from '../estilos';
import Posts from '../../Componentes/Posts';
import Stories from '../../Componentes/Stories';
import { posts } from '../../Dados/data';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


export default function Principal() {

    function NotificationsScreen({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button onPress={() => navigation.goBack()} title="Go back home" />
            </View>
        )
    }

    return <>

            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Principal} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>

        {/* InstaDog e icones */}
        <View style={estilos.cabecalho}>
            <Text style={estilos.tituloCabecalho}>InstaDog</Text>
            <FAIcon name="plus-square-o" style={estilos.icones} />
            <MCIcons name="heart-outline" style={estilos.icones} />
            <Ionicons name="chatbubble-ellipses-outline" style={estilos.icones} />
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

