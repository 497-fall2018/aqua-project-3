// /** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { Navigation } from 'react-native-navigation';

import LoginScreen from './src/screens/Login';
import ExploreScreen from './src/screens/Explore';
import SearchScreen from './src/screens/Search';
import ProfileScreen from './src/screens/Profile';
import ConfirmScreen from './src/screens/Confirm';

Navigation.registerComponent('Wander.Login', () => LoginScreen);
Navigation.registerComponent('Wander.Explore', () => ExploreScreen);
Navigation.registerComponent('Wander.Search', () => SearchScreen);
Navigation.registerComponent('Wander.Profile', () => ProfileScreen);
Navigation.registerComponent('Wander.Confirm', ()=> ConfirmScreen);

Navigation.events().registerAppLaunchedListener(()=> {
    Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
            {
                stack: {
                    children: [{
                      component: {
                        name: 'Wander.Explore',
                        passProps: {
                          text: 'This is tab 1'
                        }
                      }
                    }],
                    options: {
                        bottomTab: {
                            text: 'Explore',
                            testID: 'FIRST_TAB_BAR_BUTTON'
                        },
                        // topBar: {
                        //     title: {
                        //         text: 'Explore',
                        //         color: 'black'
                        //     }
                        // },
                    }
                },
            },
            {
                component: {
                    name: 'Wander.Search',
                    passProps: {
                      text: 'This is tab 2'
                    },
                    options: {
                      bottomTab: {
                        text: 'Search',
                        testID: 'SECOND_TAB_BAR_BUTTON'
                      }
                    }
                  }
            },
            {
                component: {
                    name: 'Wander.Profile',
                    passProps: {
                      text: 'This is tab 3'
                    },
                    options: {
                      bottomTab: {
                        text: 'Profile',
                        testID: 'THIRD_TAB_BAR_BUTTON'
                      }
                    }
                  }
            }]
          }
        }
      });
})

