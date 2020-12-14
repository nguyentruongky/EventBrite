import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Screen(screen) {
  return (
    <Stack.Screen key={screen.name} name={screen.name} component={screen} />
  );
}
