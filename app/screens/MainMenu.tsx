import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const MainMenu = () => {
  return <SafeAreaView style={styles.background}></SafeAreaView>;
};

const styles = StyleSheet.create({
  background: {
    padding: 20,
    flex: 1,
  },
});

export default MainMenu;
