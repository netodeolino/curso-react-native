import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component{

  constructor(props){
    super(props);

    this.state = { 
      escolhaUsuario : '',
      escolhaComputador : '',
      resultado : ''
    }
  }

  jokenpo(escolhaUsuario){

    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch (numAleatorio) {
      case 0:
        escolhaComputador = 'Pedra'
        break;
      case 1:
        escolhaComputador = 'Papel'
        break;
      case 2:
        escolhaComputador = 'Tesoura'
        break;
    }

    var resultado = '';

    if (escolhaComputador == 'Pedra') {
      if(escolhaUsuario == 'Pedra'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'Papel') {
        resultado = 'Você Ganhou';
      }

      if(escolhaUsuario == 'Tesoura') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador == 'Papel') {
      if(escolhaUsuario == 'Papel'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'Tesoura') {
        resultado = 'Você Ganhou';
      }

      if(escolhaUsuario == 'Pedra') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if(escolhaUsuario == 'Tesoura'){
        resultado = 'Empate';
      }

      if(escolhaUsuario == 'Pedra') {
        resultado = 'Você Ganhou';
      }

      if(escolhaUsuario == 'Papel') {
        resultado = 'Computador Ganhou';
      }
    }

    this.setState({ escolhaUsuario : escolhaUsuario,
                    escolhaComputador : escolhaComputador,
                    resultado : resultado
                  });
  }

  render(){
    return (
      <View>

        <Topo></Topo>
        
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='Pedra' onPress={ () => { this.jokenpo('Pedra') } } />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Papel' onPress={ () => { this.jokenpo('Papel') } } />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='Tesoura' onPress={ () => { this.jokenpo('Tesoura') } } />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'></Icone>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },

  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  palco: {
    alignItems: 'center',
    marginTop: 10
  },

  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 45
  },

  icone: {
    alignItems: 'center',
    marginBottom: 15
  },

  txtJogador: {
    fontSize: 17
  }
});

AppRegistry.registerComponent('app3', () => app3);
