import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Principal from './src/Telas/Principal';
import TelaPadrao from './src/Componentes/TelaPadrao';
import Rotas from './src/Rotas/index';

export default function App() {
  return (
    <TelaPadrao><Rotas/></TelaPadrao>
  );
}
