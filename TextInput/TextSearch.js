import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
import React from 'react';
import { EvilIcons } from '@expo/vector-icons'; 
export default function App() {
  const [text, onChangeText] = React.useState('');

  //console.warn(text)
//obtine el texto de entrada 
  return (
   
     <View style={styles.searchSection}>
    <EvilIcons style={styles.searchIcon} name="search" size={35} color="black" />
    <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(searchString) => {this.setState({searchString})}}
        underlineColorAndroid="transparent"
    />
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
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    
},
searchIcon: {
    padding: 10,
    backgroundColor: '#fff',
    height:52,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,

},
input: {
    flex: 1,
    fontSize:20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,


},
});
