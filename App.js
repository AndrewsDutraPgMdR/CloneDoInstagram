import React from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View>
      
      <View style={styles.header}>
        <Image source={require('./src/iconeCamera2.png')} />
        <Text style={styles.logoTitle}> INSTAGRAM </Text>
        <Image source={require('./src/setaDiag.jpg')} />
      </View>
      
      <ScrollView contentContainerStyle={styles.contentContainer}> 
        <Image source={require('./src/baixados.png')} />
        <Image source={require('./src/baixados.png')} />
        <Image source={require('./src/baixados.png')} />
        <Image source={require('./src/baixados.png')} />      
      </ScrollView>
      
      <View style={styles.tabs}>
        <Text> TO AQUI</Text>
        <Text> TO AQUI</Text>
        <Text> TO AQUI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    marginTop:20,
    justifyContent:'space-between',
    flexDirection:'row'
  },
  contentContainer: {
    alignItems:'center',
  },
  tabs:{
    backgroundColor:'yellow',
    flexDirection:'row'
  }
  
});
