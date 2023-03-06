import React from 'react'
import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import { THEME } from '../constant/THEME/colors';
import { CART } from '../constant/Data/Cart';
import { Header } from '../components/content/components';
import TabIcon from '@expo/vector-icons/Ionicons';

const Item =({title,quantity,price}) =>(
      <View style={styles.cartView}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <View>
            <Text style={styles.quantity}>x{quantity}</Text>
            <Text style={styles.price}>${price}</Text>
          </View>
          <TouchableOpacity>
          <TabIcon name="trash" size={28} color="black"  style={styles.icon}/>
          </TouchableOpacity>
        </View>
        
      </View>
)


const getTotalPrice = () => {
  // Calcula la suma de los precios de todos los productosLa función sumPrice primero utiliza el método map para extraer el precio de cada elemento del arreglo de productos y crear un nuevo arreglo con ellos. Luego, utiliza el método reduce para sumar todos los elementos del nuevo arreglo y obtener el total. Finalmente, devuelve el total con dos decimales usando el método toFixed.
  const totalPrice = CART.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.price,
    0
  );
  return totalPrice;
};


const PostScreen =({navigation})=> {
  const renderItem = ({item}) =>(
    <Item title={item.title} quantity={item.quantity} price={item.price} />
  )
  const totalPrice = getTotalPrice();

  return (
    <View style={{flex:1}}>
    <View style={styles.container}>
        <Header title="Cart"/>
        <FlatList 
          data={CART}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
          </View>
          
         <TouchableOpacity>
          <View style={styles.priceTotal}>
            <Text style={styles.priceTitle}>Total</Text>
            <Text style={styles.priceTitle}>${totalPrice.toFixed(2)}</Text>
          </View>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.82,
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
  priceTotal:{
    flexDirection:'row',
    paddingTop:30,
    justifyContent:'space-around'
  },
  priceTitle:{
    fontSize:19,
    fontWeight: 'bold',

  },

});
export default PostScreen;