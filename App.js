import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';

import { Provider } from 'react-redux';
import store from './src/store';
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDdbtiazy4xaqof_ljf1BPmB07eJYG0gXI",
  authDomain: "movieapp-ebc4d.firebaseapp.com",
  projectId: "movieapp-ebc4d",
  storageBucket: "movieapp-ebc4d.appspot.com",
  messagingSenderId: "857054223799",
  appId: "1:857054223799:web:dfef16477e1304226d5c32"
};

firebase.initializeApp(firebaseConfig)


export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigation />
      </PaperProvider>
    </Provider>

  );
}

