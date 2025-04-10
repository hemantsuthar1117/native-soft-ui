import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Notifications from './screens/Notifications';
import Articles from './screens/Articles';
import Cart from './screens/Cart';
import Calendar from './screens/Calendar';
import Chat from './screens/Chat';
import NavigationBar from './components/NavigationBar';
import { theme } from './theme';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('home');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      case 'articles':
        return <Articles />;
      case 'cart':
        return <Cart />;
      case 'calendar':
        return <Calendar />;
      case 'chat':
        return <Chat />;
      default:
        return <Home />;
    }
  };
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      {renderScreen()}
      <NavigationBar
        activeTab={activeScreen}
        onTabPress={setActiveScreen}
      />
    </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  }
});

export default App;