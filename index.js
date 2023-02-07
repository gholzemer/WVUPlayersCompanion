/**
 * @format
 */

// compilation errors:
// pod deintegrate
// pod clean
// pod install

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
