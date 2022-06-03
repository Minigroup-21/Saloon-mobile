import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import CameronJones from "./Screens/CameronJones";
import BethWatson from "./Screens/BethWatson"
import MaxRobertson from './Screens/MaxRobertson';



export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName="SignUp">
          <MainNavigator.Screen name="SignUp" component={SignUp}/>
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="Home" component={Home}/>
          <MainNavigator.Screen name="CameronJones" component={CameronJones}/>
          <MainNavigator.Screen name="MaxRobertson" component={MaxRobertson}/>
          <MainNavigator.Screen name="BethWatson" component={BethWatson}/>
        </MainNavigator.Navigator> 
      </NavigationContainer>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
 
});
