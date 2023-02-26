import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable'
export default function App() {
  const zoomOut = {
    0: {
      opacity: 1,
      scale: 1,
    },
    0.5: {
      opacity: 1,
      scale: 0.3,
    
    },
    1: {
      opacity: 0,
      scale: 0,
    },
  };
  return (
    <View style={styles.container}>
      <Animatable.Text
      style={{
        fontSize:25
      }}
    
      animation="pulse" //tipo de animacion
      useNativeDriver
      iterationCount={Infinity} //cantidad de iteracion
      >
        Texto Animado Type:Pulse
        </Animatable.Text>
        <Animatable.Text
        style={{
          fontSize:25
        }}
        //para solo una transicon de 5 veces FADE IN Apariciones 
        animation="fadeIn"
        useNativeDriver
        duration={3000}
        iterationCount={15}
        >
        Texto Animado Type:fadeIn
        </Animatable.Text>
        <Animatable.Text
        style={{
          fontSize:25
        }}
        //para solo una transicon de 5 veces FADE IN Apariciones 
        animation="fadeInDown"
        useNativeDriver
        duration={3000}
        iterationCount={15}
        >
        Text Type:fadeInDown
        </Animatable.Text>
        <Animatable.Text
        style={{
          fontSize:25
        }}
        //para solo una transicon de 5 veces FADE IN Apariciones 
        animation="flipInY"
        useNativeDriver
        duration={3000}
        iterationCount={15}
        >
        Text Type:fadeInLeft
        </Animatable.Text>
        <Animatable.Text 
          animation={zoomOut} 
          duration={3000}
          iterationCount={15}
        
        >Fade me in</Animatable.Text>
        <Animatable.Text
        style={{
          fontSize:25
        }}
        //para solo una transicon de 5 veces FADE IN Apariciones 
        animation="tada"
        direction="reverse"
        iterationCount={15}

        >
        Text Type:fadeInLeft
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
