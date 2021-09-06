import React from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilos from './estilos';
import estilosGlobal from '../../estilosGlobal';

export default function TelaPadrao({ children }) {
  return <>
    <SafeAreaView style={estilos.ajusteTela}>
    <StatusBar />
    <KeyboardAvoidingView 
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
    <SafeAreaView style={estilos.ajusteTelaBaixo} />
  </>
}