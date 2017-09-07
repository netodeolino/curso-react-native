import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
		  <View style={{ backgroundColor: "#FFF", flex: 1 }}>
        <StatusBar 
          //hidden
          backgroundColor='#B9C941'
        />

        <BarraNavegacao voltar navigator={this.props.navigator} corDeFundo={'#B9C941'} />

        <View style={styles.menu}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>huas huas huashaushuahsuahs</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>hahahahah haha hahaha jajsha</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 20,
    flexDirection: 'row'
  },

  txtTitulo: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },

  detalheCliente: {
    marginTop: 10,
    padding: 20
  },

  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});