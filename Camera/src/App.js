import { NavigationContainer } from '@react-navigation/native'; //tab navigation

//import TabNavigation cree
import Tabs from './navigation/Tab';

const App =()=> {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  );
}

export default App;