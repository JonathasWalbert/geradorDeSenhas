import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function PasswordItem( {data, removePassword} ) {
 return (
   <Pressable onLongPress={removePassword} style={style.container}>
    <Text style={style.text} > {data} </Text>
   </Pressable>
  );
}

const style=StyleSheet.create({
  container:{
    backgroundColor: '#0E0E0E',
    padding: 14,
    width: '100%',
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  text:{
    color: '#FFF'
  }

})