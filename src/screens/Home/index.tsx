import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

const HomeStackScreen = () => {
    
  const HomeStack = createNativeStackNavigator()

  return (
      <HomeStack.Navigator>
      <HomeStack.Screen name="Ana Sayfa" component={HomeScreen} />
    </HomeStack.Navigator>

  )
}

export default HomeStackScreen