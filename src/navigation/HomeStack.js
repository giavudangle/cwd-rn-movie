import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';


const HomeStack = createStackNavigator();



export default HomeStackNavigator = () => {
  return(
    <HomeStack.Navigator screenOptions={{
      headerShown:false
    }}>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='DetailMovie' component={MovieDetailScreen}/>
    </HomeStack.Navigator>
  )
}