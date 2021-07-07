import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen'

const ProfileStack = createStackNavigator();


const ProfileStackNavigator = () => {
  return(
    <ProfileStack.Navigator mode='modal'>
      <ProfileStack.Screen options={{headerShown:false}} name='ProfileTab' component={ProfileScreen}/>
    
    </ProfileStack.Navigator>
  )
}

export default ProfileStackNavigator