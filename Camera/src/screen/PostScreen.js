import React from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import { THEME } from '../constant/colors';
import { Header } from '../components/content/Component';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import TabIcon from '@expo/vector-icons/Ionicons'

const PostScreen =({navigation})=> {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" color={THEME.colorTab.primary}/>
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
        <Header title="Escanear codigo QR"/>
        <View style={styles.containerCamera}>
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
            </View>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
               <TabIcon name="camera-reverse-sharp" size={35} color="black" />            
            </TouchableOpacity>
          </Camera>
         
        </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colorScreen.primary,
  },
  containerCamera:{
    height:400,
    marginTop:20,
    marginHorizontal:20,
    borderWidth:4,
    borderColor:THEME.colorTab.primary
  },
  camera:{
    flex:1
  },
  button:{
    flex:1,
    justifyContent:'flex-end',
    paddingLeft:10,
    paddingBottom:5
  }
});
export default PostScreen;