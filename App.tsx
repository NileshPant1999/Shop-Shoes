import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './src/Authentication/Onboarding/Onboarding';
import { LoadAssets } from './src/components';

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const AuthencationStack = createStackNavigator()

const AuthencationNavigator = () => {
  return (
    <AuthencationStack.Navigator headerMode={'none'}>
       <AuthencationStack.Screen name={"onboarding"} component={Onboarding} />
    </AuthencationStack.Navigator>
  )
  
}

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthencationNavigator />
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
