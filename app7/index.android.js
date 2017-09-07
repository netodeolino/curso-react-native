import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import App from './src/App';

class app7 extends Component {
  render() {
    return (
      <App />
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('app7', () => app7);
