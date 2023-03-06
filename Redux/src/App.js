import { NavigationContainer } from '@react-navigation/native'; //tab navigation
import Store from './store/Store';
//import TabNavigation cree
import Tabs from './navigation/Tab';
import { Provider } from 'react-redux';

const App =()=> {
  return (
    <Provider store={Store}>
       <NavigationContainer>
        <Tabs/>
       </NavigationContainer>
    </Provider>
   
  );
}

export default App;