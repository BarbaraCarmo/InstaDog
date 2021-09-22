import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from '../../Telas/Principal';
import Chat from '../../Telas/Chat';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
};

export default StackNavigator;