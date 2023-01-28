import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigationController from './src/screens/StackNavigationController';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigationController />
    </NavigationContainer>
  );
};

export default App;
