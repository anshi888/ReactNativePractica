import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import { THEME } from '../constant/THEME/colors';
import { Header } from '../components/content/components'
import {PRODUCTS} from '../constant/Data/Product'
import { useSelector } from 'react-redux';
const FindScreen =({navigation})=> {
  //traigo desde el store
  const category = useSelector((state)=> state.category.selected)
 // const { title ,id} = route.params;
 //const { title } = route.params; //se remplazo por redux usesate
 //no necesito route const FindScreen =({navigation,route})=> {
  const [products,setProduct] = useState([]);
  //console.warn(category)
  //filtro 
  //utilizo usseEffect para actualizar product , si no se coloca no actualiza al hacer click 
  useEffect(() => {
    //filtro

    const filtroProduct = PRODUCTS.filter(
     //(product) => product.categoryId === id

      (product) => product.categoryId === category.id
    );
    // Actualiza el estado de los productos con el arreglo filtrado
    setProduct(filtroProduct);
  }, [category.id]);
  return (
    <View style={styles.container}>
        <Header title={category.title}/>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productView}>
            <Text style={styles.title}>{item.title}</Text>
           <View style={styles.row}>
           <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.weight}>x {item.weight}</Text>

           </View>
            

          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colorScreen.primary,
   
  },
  productView:{
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    height:120,
    backgroundColor:THEME.colorProduct.primary,
    paddingBottom:10,
    borderRadius:20,
    paddingTop:10,
   
  },
  price:{
    fontSize:19,
    color:THEME.colorProduct.secundary

  },
  weight:{
    color:THEME.colorProduct.secundary,
    fontSize:19
  },
  title:{
    fontSize:20,
    textAlign:'center',
    color:THEME.colorProduct.secundary,
    fontWeight: 'bold',


  },
  row:{
    flex:1,
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-around'
  }
});
export default FindScreen;