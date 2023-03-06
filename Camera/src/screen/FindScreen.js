import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constant/colors';


const FindScreen =({navigation})=> {
  return (
    <View style={styles.container}>
        <Text>FindScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colorScreen.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FindScreen;