import React from 'react';
import {
  Text,
  View,
  Button,
  AppRegistry
} from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random() * 10;
  alert(Math.floor(numeroAleatorio)+1);
}

const App = () => {
  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button
        title="Gerar um número randômico"
        onPress={geraNumeroAleatorio}
      />
    </View>
    );
};

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

AppRegistry.registerComponent('app1', () => App);
