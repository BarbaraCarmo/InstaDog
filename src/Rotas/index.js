import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import estilos from './estilos';

import Principal from '../Telas/Principal';
import Perfil from '../Telas/Perfil';

import { cores } from '../estilosGlobal';

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name == 'Principal') {
                        return <Ionicons name={focused ? "home" : "home-outline"} style={estilos.icones}/>
                    } else if (route.name == "Pesquisar") {
                        return <Ionicons name={focused ? "search" : "search-outline"} style={estilos.icones}/>
                    } else if (route.name == "Play") {
                        return <MCIcon name={focused ? "play-box-multiple" : "play-box-multiple-outline"} style={estilos.icones}/>
                    }else if (route.name == "Shop") {
                        return <MCIcon name={focused ? "shopping" : "shopping-outline"} style={estilos.icones}/>
                    } else {
                        return <Ionicons name={focused ? "md-person-circle-sharp" : "md-person-circle-outline"} style={estilos.icones}/>
                    }
                },
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: cores.fundoPadrao,
                tabBarInactiveBackgroundColor: cores.fundoPadrao,
            })}
        >
            <Tab.Screen name="Principal" component={Principal} />
            <Tab.Screen name="Pesquisar" component={Principal} />
            <Tab.Screen name="Play" component={Principal} />
            <Tab.Screen name="Shop" component={Principal} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    </NavigationContainer>
}