import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Dimensions ,  StyleSheet} from 'react-native'
import Slick from 'react-native-slick'
const { width } = Dimensions.get('window')
//https://github.com/ahmed3mar/react-native-slick

export default function App() {
  return (
    <View style={styles.container}>
        <Slick style={styles.wrapper} height={400} horizontal={true} loop={false} >
          <View style={styles.slide1}>
            <Image
               style={styles.image}
               source={require('./assets/1.jpg')}
              
            ></Image>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Slick>
        <Slick
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./assets/1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./assets/2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./assets/3.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./assets/4.jpg')}
            />
          </View>
        </Slick>
       
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
});
