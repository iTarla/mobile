import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SignIn} from './views/authentication/SignIn';
import {ChooseFarm} from './views/farm/ChooseFarm';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ChooseFarm" component={ChooseFarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
