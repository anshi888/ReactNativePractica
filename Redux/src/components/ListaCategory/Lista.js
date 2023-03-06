import React,{useState} from "react";
import { StyleSheet,Text ,FlatList,View,TouchableOpacity} from "react-native";
//import { CATEGORIES } from "../../constant/Data/Category";
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { useSelector,useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/categoryAction";


const Item = ({title,color}) =>(
    <View style={[styles.item, { backgroundColor: color }]}>
    <Text style={styles.title}>{title}</Text>
    </View>
);

const Lista =()=>{
  const dispatch=useDispatch();
  const categories = useSelector((state)=>state.category.categories)

  const navigation = useNavigation(); // Obtener el objeto de navegación
  
  

  const renderItem = ({ item }) => (
      //name debe ser el que se declaro en el Tab name!!
      //envio el parametro title 
        <TouchableOpacity onPress={
          () =>{
            //disparo action id 
            dispatch(selectCategory(item.id))
            navigation.navigate('Find',
          { title: item.title })
          //remuevo el id
        }}>  
        <Item title={item.title} color={item.color} />
        </TouchableOpacity>
      );
    return(
        <View style={styles.container}>
        <Text style={styles.subtitle}>Category</Text>
        <FlatList
         // data={CATEGORIES}
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      paddingBottom:95
    },
    item: {
      padding: 20,
      height:90,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold',
    },
    subtitle:{
      fontSize: 18,
      textAlign:'left',
      paddingBottom:20,
      paddingLeft:20,
      fontWeight: 'bold',

    }
  });
  
export default Lista;