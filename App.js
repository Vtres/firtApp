import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { ScrollView, StyleSheet, View } from 'react-native';
import Render from './components/Render';
import Body from './components/Body';
import States from './components/States';
import Hooks from './components/Hooks';
// import Lorem from './components/Lorem';

export default class App extends React.Component {

  componentDidMount(){
    alert('componente chamado automaticamente depois de renderização')
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#d8dfe6', marginTop: Constants.statusBarHeight }}>
        <StatusBar backgroundColor="#d8dfe6" translucent />
        {/* <Render></Render> */}
        {/* <Body titulo="clique aquii" texto="texto top"></Body>
        <States></States> */}
        <Hooks></Hooks>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
