import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
//Palpitacion infinita de pulse 
export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text
      style={{
        fontSize:25
      }}
      //para solo una transicon de 5 veces FADE IN
      //animation="fadeIn"
      //useNativeDriver
      //duration={3000}
      //iterationCount={5}
      //
      animation="pulse"
      useNativeDriver
      iterationCount={Infinity}
      >
        👍
        </Animatable.Text>
      <StatusBar style="auto" />
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
});
