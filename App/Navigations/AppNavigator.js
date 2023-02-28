import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useState } from 'react';
import { navigationRef } from './RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import  {HomeScreen}  from '../Screens/home/App'
import  {SplashScreen}  from '../Screens/SplashScreen/Index'
const AppStack = createNativeStackNavigator();
const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(false);
{/**
  <AppStack.Group screenOptions={{ presentation: 'modal' }}>
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SplashScreen" component={SplashScreen} />
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        </AppStack.Group> */}
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <AppStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"SplashScreen"}>
        <AppStack.Screen name="SplashScreen" component={SplashScreen} />
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
        </AppStack.Navigator >
      </NavigationContainer >



    </SafeAreaProvider >


  );
};

export default AppNavigator;