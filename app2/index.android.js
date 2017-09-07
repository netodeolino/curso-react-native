import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const styles = {
  principal: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = "teste1";
  frases[1] = "teste2";
  frases[2] = "teste3";

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
}

const App = () => {
  const { principal, botao, textoBotao } = styles;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')}>
      </Image>

      <TouchableOpacity
      onPress={gerarNovaFrase}
      style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
