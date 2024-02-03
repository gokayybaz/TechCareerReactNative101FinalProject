import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from './EventsScreen';

const EventsStackScreen = () => {
    
  const EventsStack = createNativeStackNavigator()

  return (

      <EventsStack.Navigator>
      <EventsStack.Screen name="Etkinlikler" component={EventsScreen} />
      
    </EventsStack.Navigator>

  )
}

export default EventsStackScreen