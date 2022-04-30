import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header (){
    return (
        <View style={{marginTop:50}}>
          <Text style={{ fontSize: 18, textAlign: 'right', marginRight: 5}}>HOME | SOBRE | CONTATO</Text>
        </View>
      );
}