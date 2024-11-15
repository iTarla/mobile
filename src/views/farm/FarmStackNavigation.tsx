import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { Farm } from './Farm';
import { FarmDetails } from './FarmDetails';

const Stack = createStackNavigator();

export const FarmStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='FarmOverview' component={Farm} />

        <Stack.Screen name='FarmDetails' component={FarmDetails} />
    </Stack.Navigator>
  );
};
