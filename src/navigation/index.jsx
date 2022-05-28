import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import { ImageSelector } from '../screens';
import ResultPage from '../screens/ResultPage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName='Root'>
      <Stack.Screen
        name={'Root'}
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'ImageSelector'}
        component={ImageSelector}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'ResultPage'}
        component={ResultPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
