import React from "react";
import { StyleSheet,Text,View } from "react-native";


const Header= ({title}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      paddingLeft:20
    },
    title:{
        fontSize:25,
        fontWeight: 'bold',

    }
  });
export default Header;