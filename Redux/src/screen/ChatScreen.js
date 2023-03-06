import React from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import { THEME } from '../constant/THEME/colors';
import {ORDERS} from '../constant/Data/Orders';
import TabIcon from '@expo/vector-icons/Ionicons';
import { Header } from '../components/content/components';

const Item =({total,date}) =>{
  const formattedDate = new Date(date).toLocaleDateString();
  return(
  <View style={styles.cartView}>
    <View style={styles.details}>
      <View>
       <Text style={styles.title}>{formattedDate}</Text>
        <Text style={styles.quantity}>${total}</Text>
      </View>
      <TouchableOpacity>
      <TabIcon name="trash" size={28} color="black"  style={styles.icon}/>
      </TouchableOpacity>
    </View>
    
  </View>)
}
const ChatScreen =({navigation})=> {
  const renderItem = ({item}) =>(
    <Item total={item.total} date={item.date}  />
  )
  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
        <Header title="Orders"/>
        <FlatList 
          data={ORDERS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
          </View>
          
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colorScreen.primary,

  },
  cartView:{
    backgroundColor:THEME.colorCart.primary,
    margin:10,
    padding:15,
    borderRadius:15,
    marginTop:10
   
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
    color:THEME.colorCart.secundary
  },
  quantity:{
    fontSize:16,
    color:THEME.colorCart.secundary

  },
  price:{
    fontSize:16,
    color:THEME.colorCart.secundary

  },
  details:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});
export default ChatScreen;