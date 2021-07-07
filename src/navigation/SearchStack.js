import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchMovieScreen from '../screens/SearchMovieScreen'

const SearchStack = createStackNavigator();


const SearchStackNavigator = () => {
  return(
    <SearchStack.Navigator mode='modal'>
      <SearchStack.Screen options={{headerShown:false}} name='PlanHome' component={SearchMovieScreen}/>
    
    </SearchStack.Navigator>
  )
} 
export default SearchStackNavigator