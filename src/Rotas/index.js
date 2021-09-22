import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import estilos from './estilos';

import Principal from '../Telas/Principal';
import Perfil from '../Telas/Perfil';
import Pesquisa from '../Telas/Pesquisa';
import Reels from '../Telas/Reels';

import { cores } from '../estilosGlobal';
import StackNavigator from '../Componentes/StackNavigator';
import Adote from '../Telas/Adote';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name == 'Stack') {
                        return <Ionicons name={focused ? "home" : "home-outline"} style={estilos.icones} />
                    } else if (route.name == "Pesquisar") {
                        return <Ionicons name={focused ? "search" : "search-outline"} style={estilos.icones} />
                    } else if (route.name == "Play") {
                        return <MCIcon name={focused ? "play-box-multiple" : "play-box-multiple-outline"} style={estilos.icones} />
                    } else if (route.name == "Adote") {
                        return <Ionicons name={focused ? "paw" : "paw-outline"} style={estilos.icones} />
                    } else {
                        return <Ionicons name={focused ? "md-person-circle-sharp" : "md-person-circle-outline"} style={estilos.icones} />
                    }
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: cores.fundoPadrao,
                tabBarInactiveBackgroundColor: cores.fundoPadrao,
                tabBarHideOnKeyboard: true,
            })}

        >
            <Tab.Screen name="Stack" component={StackNavigator} />
            <Tab.Screen name="Pesquisar" component={Pesquisa} />
            <Tab.Screen name="Play" component={Reels} />
            <Tab.Screen name="Adote" component={Adote} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    </NavigationContainer>
}