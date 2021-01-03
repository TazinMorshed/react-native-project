import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import CarsList from './components/CarsList'
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <CarsList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  // 1:35:46 FlatList Snap Effect YOUTUBE 
  // https://www.youtube.com/watch?v=iQ_0Fd_N3Mk
  
});
