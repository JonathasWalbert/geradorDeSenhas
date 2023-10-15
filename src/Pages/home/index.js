import React, { useState } from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

import Slider from '@react-native-community/slider';

import { ModalPassword } from '../../Components/Modal';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function handleKey(){
    let password = '';
    for (let i=0, n=charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return(
    <View style={styles.container} >
      
      <Image
      source={require('../../Assets/logo.png')}
      style={styles.logo}
      />


      <Text style={styles.title}> {size} Caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#ffa500"
          maximumTrackTintColor="#000000"
          thumbTintColor='#392de9'
          value={10}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>
      

      <TouchableOpacity style={styles.button} onPress={handleKey}>
        <Text style={styles.buttonTxt}> Gerar Senha </Text>
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType='fade' transparent={true}  >
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}  />
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FF'
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius:8,
    padding: 6
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonTxt: {
    color:'#FFF',
    fontWeight: '500',
    fontSize: 20
  },
  title:{
    fontSize: 30,
    fontWeight:'bold'
  }
})