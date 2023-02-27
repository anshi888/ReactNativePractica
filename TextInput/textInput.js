import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import React from 'react';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  console.warn(text)
//obtine el texto de entrada 
  return (
    <View style={styles.container}>
      <TextInput         
      placeholder="🔎 Ingrese dato"
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      >
      </TextInput>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      >
      </TextInput>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    width:300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:15,
    textAlign:'left',
    paddingLeft:20
  }
});
