import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Index from './index';
import Welcome from '.';
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name='index'
        component={Index}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
}
