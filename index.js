// Index.android.js - place code in here for android.

// Import a library to hrlp create a component.

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create the component
const App = () => (
    <Header headerText={'Albums!'} />
);

// Render it on the device.
AppRegistry.registerComponent('albums', () => App);




// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
