/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Root from './src/root.js';

export default class costar extends Component {
  render() {
    return (
      <Root></Root>
    );
  }
}

AppRegistry.registerComponent('costar', () => costar);
