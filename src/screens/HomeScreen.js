import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'

function HomeScreen() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/*<Tab.Screen name="Home" component={HomeScreen} />*/}
        {/*<Tab.Screen name="Settings" component={SettingsScreen} />*/}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen
