import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ant from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
import HomeStackNavigator from './HomeStack'
import CinemaStackNavigator from './CinemaStack'
import PlanStackNavigator from './PlanStack'
import ProfileStackNavigator from './ProfileStack'
import SearchMovieStack from './SearchStack'

export default RootTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      
    }}>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='home' />
          ),
          tabBarBadge: 3,
          tabBarLabel: '',
        }}
      />
       <Tab.Screen
        name='Plan'
        component={PlanStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='calendar' />
          ),
      
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchMovieStack}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='search1' />
          ),
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Cinema'
        component={CinemaStackNavigator}
        options={{
          tabBarIcon: () => (
            <Icon style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='theater' />
          ),
       
          tabBarLabel: '',

        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ant style={{ paddingTop: 10 }} size={25} color='#2e2e2e' name='user' />
          ),
          tabBarLabel: '',
        }}
      />
       
     
      
    </Tab.Navigator>
  )
}