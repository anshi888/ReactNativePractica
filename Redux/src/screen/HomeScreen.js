import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constant/THEME/colors';
import {Header,Lista} from '../components/content/components'

const HomeScreen =({navigation})=> {
  return (
    <View style={styles.container}>
      <Header title="Panaderia Express"/>
      <Lista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colorScreen.primary,
  },
});
export default HomeScreen;