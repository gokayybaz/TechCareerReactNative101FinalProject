import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/screens/Home"
import Events from "./src/screens/Events"
import Profile from "./src/screens/Profile"

const App = () => {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
     <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScreen" component={Home} />
        <Tab.Screen name="EventsScreen" component={Events} />
        <Tab.Screen name="ProfileScreen" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App