// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/Login';

Navigation.registerComponent('Wander.Login', () => LoginScreen)

Navigation.events().registerAppLaunchedListener(()=> {
    Navigation.setRoot({
        root:{
            component:{
                name:'Wander.Login'
            }
        }
    })
})