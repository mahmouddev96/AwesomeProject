import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import AppNavigator from './App/Navigations/AppNavigator';
import { LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
const App = () => {
  // const dispatch = useDispatch()
  useEffect(() => {
    // SplashScreen.hide();
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <PaperProvider >
      <AppNavigator />
    </PaperProvider>
          
    
  );
};

export default App;





