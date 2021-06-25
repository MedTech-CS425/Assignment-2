import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/pages/auth/Auth';
import Home from './src/pages/home/Home';

export default function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false)

  let page = <Home />
  if(!isLoggedIn){
    page = <Auth setIsLoggedIn={setIsLoggedIn}/>
  }

  return (
    <View style={styles.container}>
      {page}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
