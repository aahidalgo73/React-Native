import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native-web';
import { Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { getPersonajes } from './lib/rickyMorty';
import Logo from './components/Logo';
import { CharacterCard } from './components/CharacterCard' ;
import { Main } from './components/Main' ;

export default function App() {

 
  return (
    <View style={styles.container}>
      <StatusBar style = 'light'/>
      <Logo style = {styles.logo}/>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image : {
    width: 107,
    height: 147,
    borderRadius:10,
  },

  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom : 20,
    width: '90%',
    alignItems: 'center'
  },
  title: {
    fontSize:  20,
    fontWeight: 'bold',
    marginBottom: 10,
    color : '#fff'
  },

   species: {
    fontSize:  16,    
    color : '#fff'
  },

  status: {
    fontSize:  16,    
    color : '#33caff'
  },

  gender: {
    fontSize:  16,    
    color : '#fff',
    fontWeight : 'bold'
  },

  logo: {
       backgroundColor: '#333',
       padding :20 
  }
});
