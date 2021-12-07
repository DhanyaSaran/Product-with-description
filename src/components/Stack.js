import React from "react";


import { createStackNavigator } from '@react-navigation/stack';

import List from './list'
import ProductsScreen from "./ProductsScreen";
// import ImageIcon from './Image_Icon';


const Stack = createStackNavigator();

 TransactionStack=()=> {
    return (
        
        <Stack.Navigator initialRouteName={'List'} screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name='ProductsScreen' component={ProductsScreen}/> */}
        <Stack.Screen name="List" component={List} />
        {/* <Stack.Screen name='ImageIcon' component={ImageIcon}/> */}
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
       
        </Stack.Navigator>
        
    );
  }
  
  export default TransactionStack;