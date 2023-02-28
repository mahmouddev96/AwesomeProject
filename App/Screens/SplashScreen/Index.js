import React, { useState, useEffect,useRef } from "react";
import { Alert, Image,StatusBar, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AppImage from "../../../imgs";
export const SplashScreen = ({ navigation,route }) => {

useEffect(() => {
  setTimeout(() => {
    navigation.navigate('HomeScreen')
}, 2000);
}, []);
    return (
       <SafeAreaView  style={{ flex:1, backgroundColor: 'white' }} >
         <StatusBar barStyle={'light-content'}  />
         <Image
        style={{width:'100%',height:'100%'}}
        resizeMode='center'
        source={AppImage.Seller}
      />

       </SafeAreaView>

    );
}

