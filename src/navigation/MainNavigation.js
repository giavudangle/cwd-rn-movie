import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStack';
import RootTabNavigator from './RootTabNavigator'

import firebase from 'firebase'





const MainNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
    //firebase.auth().signOut();
    return subscriber; // unsubscribe on unmount
  }, []);

  console.log(user);

  
  return (
    <NavigationContainer>
      {user ?<RootTabNavigator/>: <AuthStackNavigator/>}
    </NavigationContainer>
  );
}


export default MainNavigation;