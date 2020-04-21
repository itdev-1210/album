//Index.windows.js - place code in here for IOS!!!!
//Import a library to help create a component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a componbent
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );


//Render it to device
AppRegistry.registerComponent('albums', () => App);
