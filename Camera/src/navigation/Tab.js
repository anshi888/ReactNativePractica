import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //importo lib Tab
import { StyleSheet,TouchableOpacity,View } from 'react-native';
//Importo las Screen
import{HomeScreen,FindScreen,ChatScreen,SettingScreen,PostScreen} from '../screen/content/Screen'
import TabIcon from '@expo/vector-icons/Ionicons'
import ButtonAdd from '../components/tabButton/buttonAdd';
import { THEME } from '../constant/colors';
const Tab = createBottomTabNavigator();
//boton central 

const Tabs = () =>{
   
    return(
        <Tab.Navigator
                screenOptions={{
                    headerShown:false,
                    tabBarLabelStyle:{ //editar el labe
                     fontSize:12,
                     bottom:12
                    },
                    tabBarStyle: //editar diseño del tab
                    { 
                        position: 'absolute',
                        backgroundColor:THEME.colorTab.white,
                        bottom:25,
                        left:20,
                        right:20,
                        height:80,
                        borderRadius:20,
                        ...style.shadow
                
                    },
                    tabBarActiveTintColor:THEME.colorTab.black, //click opcion primaria
                    tabBarInactiveTintColor:THEME.colorTab.gray, //click opcion secuandaria
                    
                }}> 
            <Tab.Screen 
                name="Home"  //nombre de la opcion 1 Screen
                component={HomeScreen} 
                options={{
                    title:'Home',
                    tabBarIcon:({focused}) =>(
                        <TabIcon 
                        name={focused ? "home" : 'home-outline'} 
                        size={24} 
                        color= {THEME.colorTab.black}
                        />
                    )}} />
            <Tab.Screen 
                name="Find" 
                component={FindScreen} 
                options={{
                    title:'Find',
                    tabBarIcon:({focused}) =>(
                        <TabIcon 
                        name={focused ? "search" : 'search-outline'} 
                        size={24} 
                        color={THEME.colorTab.black}
                        />
                    )}} 
                />
            <Tab.Screen 
                name="Post" 
                component={PostScreen} 
                options={{
                    tabBarLabel:'',
                    tabBarIcon:({focused,size,color}) =>(
                    <ButtonAdd size={size} color={color} focused={focused}/>
                )}}
                />
            <Tab.Screen 
                name="Chat" 
                component={ChatScreen} 
                options={{
                    title:'Chat',
                    tabBarIcon:({focused}) =>(
                        <TabIcon 
                        name={focused ? "chatbubbles" : 'chatbubbles-outline'} 
                        size={24} 
                        color={THEME.colorTab.black} 
                        />
                    )}} 
                />
            <Tab.Screen 
                name="Setting" 
                component={SettingScreen} 
                options={{
                    title:'Setting',
                    tabBarIcon:({focused}) =>(
                        <TabIcon 
                        name={focused ? "construct" : 'construct-outline'} 
                        size={24} 
                        color={THEME.colorTab.black} 
                        />
                    )}} 
                />

        </Tab.Navigator>
    );
}
const style = StyleSheet.create({
    shadow:{
        shadowColor:THEME.colorTab.black,
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:25,
        elevation:5
    }
});
export default Tabs;