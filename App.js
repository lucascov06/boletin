
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './boletin/screens/Login';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;