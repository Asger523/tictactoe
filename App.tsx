import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from './app/screens/MainMenu';

const stack = createNativeStackNavigator();

const App = () => {
  const defaultScreenOptions = {
    headerStyle: { backgroundColor: '#23272a' },
    headerTitleStyle: { color: 'white' },
    headerBackTitleVisible: false,
    headerTintColor: 'white',
  };

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={defaultScreenOptions}>
        <stack.Screen name="MainMenu" component={MainMenu} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#3b3b3b',
    flex: 1,
  },
});

export default App;
