// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/Login';
import ExploreScreen from './src/screens/Explore';
import SearchScreen from './src/screens/Search';
import CartScreen from './src/screens/Cart';
import DescriptionScreen from './src/screens/Description';

Navigation.registerComponent('Wander.Login', () => LoginScreen);
Navigation.registerComponent('Wander.Explore', () => ExploreScreen);
Navigation.registerComponent('Wander.Search', () => SearchScreen);
Navigation.registerComponent('Wander.Cart', () => CartScreen);
Navigation.registerComponent('Wander.Description', ()=> DescriptionScreen);

Navigation.events().registerAppLaunchedListener(()=> {
    Navigation.setRoot({
        root: {
          component:{
            name: 'Wander.Login',
          }
        }
      });
})

