import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import { Movie } from '../interfaces/MoviesResponse.interface';

export type RootStackParamList = {
  Home: undefined;
  Detail: Movie;
};

const StackNavigation = createStackNavigator<RootStackParamList>();

const StackNavigationController = () => {
  return (
    <StackNavigation.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <StackNavigation.Screen name="Home" component={HomeScreen} />
      <StackNavigation.Screen name="Detail" component={DetailScreen} />
    </StackNavigation.Navigator>
  );
};

export default StackNavigationController;
