import React from 'react';

import Login from './src/screens/Login/index';

import Cadastro from './src/screens/Login/cadastro';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
   <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="Login" component={Login} />
 <Stack.Screen name="Cadastro" component={Cadastro} />
   </Stack.Navigator>
 </NavigationContainer>

    
  );
  }
