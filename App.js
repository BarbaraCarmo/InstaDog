import React from 'react';
import StackNavigator from './src/Componentes/StackNavigator';
import TelaPadrao from './src/Componentes/TelaPadrao';
import Rotas from './src/Rotas/index';

export default function App() {
  return ( <>
    <TelaPadrao><Rotas/></TelaPadrao>
    </>
  );
}
