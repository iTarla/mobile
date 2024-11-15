import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SignIn} from './views/authentication/SignIn';
import {ChooseFarm} from './views/farm/ChooseFarm';
import { ChooseCrop } from './views/farm/ChooseCrop';
import { BottomNavigation } from './views/farm/BottomNavigation';

const Stack = createStackNavigator();

export const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ChooseFarm" component={ChooseFarm} />
        <Stack.Screen name="ChooseCrop" component={ChooseCrop} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
