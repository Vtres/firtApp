import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {

  render() {
    return (
      <View style={{backgroundColor: '#d8dfe6',flex: 1}}>
        <Header></Header>
        
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
