import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CinemaScreen from '../screens/CinemaScreen'
import MapTheaterScreen from '../screens/MapTheaterScreen'

const CinemaStack = createStackNavigator();

const CinemaStackNavigator = () => {
  return (
    <CinemaStack.Navigator mode='card'>
      <CinemaStack.Screen options={{headerShown:false}} name='Cinema' component={CinemaScreen}/>
      <CinemaStack.Screen options={{headerShown:false}} name='MapCinema' component={MapTheaterScreen}/>
    </CinemaStack.Navigator>
  )
}

export default CinemaStackNavigator