import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TabIcon from '@expo/vector-icons/Ionicons';
import { THEME } from '../../constant/THEME/colors';

const ButtonAdd =({focused,size,color})=> {
  return (
    <View style={[styles.container, {backgroundColor: focused ? THEME.colorTab.secundary : THEME.colorTab.primary}]}>
        <TabIcon name="cart" color={focused ? THEME.colorTab.white : THEME.colorTab.gray} size={size}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      width:60,
      height:60,
      alignItems:'center',
      justifyContent:'center',
      marginBottom:45,
      borderRadius:30,

  },
});

export default ButtonAdd;