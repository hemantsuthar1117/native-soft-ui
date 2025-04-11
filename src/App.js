import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Notifications from './screens/Notifications';
import Articles from './screens/Articles';
import Cart from './screens/Cart';
import Calendar from './screens/Calendar';
import Chat from './screens/Chat';
import { theme } from './theme';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray,
    paddingBottom: 5,
    paddingTop: 5
  }
});

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.gray,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 3
          }
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Notifications" 
          component={Notifications}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-outline" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;