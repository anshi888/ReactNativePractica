import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constant/colors';

const ChatScreen =({navigation})=> {
  return (
    <View style={styles.container}>
        <Text>ChatScreen</Text>
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
export default ChatScreen;