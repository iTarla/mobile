import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Home} from '../farm/Home';
import { Dimensions, StyleSheet } from 'react-native';
import HomeIcon from '../../assets/icons/Home.svg';
import AutomationIcon from '../../assets/icons/Automation.svg';
import FarmIcon from '../../assets/icons/Farm.svg';
import HomeActiveIcon from '../../assets/icons/HomeActive.svg';
import AutomationActiveIcon from '../../assets/icons/AutomationActive.svg';
import FarmActiveIcon from '../../assets/icons/FarmActive.svg';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator safeAreaInsets={{bottom: 0}} screenOptions={{headerShown: false, tabBarStyle: styles.navigatorStyle}}>
      <Tab.Screen options={{tabBarActiveTintColor: '#0A973A', tabBarIcon: ({focused }) => focused ? <HomeActiveIcon width={24} height={24} /> : <HomeIcon width={24} height={24} />, tabBarLabelStyle: styles.label}} name="Home" component={Home} />
      
      <Tab.Screen options={{tabBarActiveTintColor: '#0A973A', tabBarIcon: ({focused }) => focused ? <AutomationActiveIcon width={24} height={24} /> : <AutomationIcon width={24} height={24} />, tabBarLabelStyle: styles.label }} name="Automation" component={Home} />
      
      <Tab.Screen options={{tabBarActiveTintColor: '#0A973A', tabBarIcon: ({focused }) => focused ? <FarmActiveIcon width={24} height={24} /> : <FarmIcon width={24} height={24} />, tabBarLabelStyle: styles.label }} name="Farm" component={Home} />
    </Tab.Navigator>
  );
};

const menuWidth = Dimensions.get('window').width - 68;

const styles = StyleSheet.create({
  navigatorStyle: {
    paddingHorizontal: 28,
    paddingVertical: 4,
    borderRadius: 5,
    height: 56,
    width: menuWidth,
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 12,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Figtree',
    fontSize: 12,
  },
});