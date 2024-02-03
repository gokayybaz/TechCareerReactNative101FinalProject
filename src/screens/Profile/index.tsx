import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';

const ProfileStackScreen = () => {
    
  const ProfileStack = createNativeStackNavigator()

  return (
      <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profilim" component={ProfileScreen} />
      
    </ProfileStack.Navigator>

  )
}

export default ProfileStackScreen