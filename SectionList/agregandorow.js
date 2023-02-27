import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
    nombre:'angie',

  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    nombre:'angie2'

  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer','Fernet'],
    nombre:'angie3'

  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
    nombre:'angie4'

  },
];
//item guarda data miesntas que index la position
const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item,section: {nombre,number,colores}}) => (
        //item de la lista
        
        <View style={styles.item}>
          <TouchableOpacity>
          <Text style={styles.title}>{item}</Text>
          <Text style={styles.title}>{nombre}</Text>

      

          </TouchableOpacity>
        </View>
      )}
      //titulo de la list agarra el atributos section contiene 
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'yellow'
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    marginLeft:20,
    marginRight:20,
    borderWidth:1,
    borderRadius:20
  },
  header: {
    fontSize: 22,
    backgroundColor:'yellow',
    textAlign:'center'
  },
  title: {
    fontSize: 20,
  },
});

export default App;