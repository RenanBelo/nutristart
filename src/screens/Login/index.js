import React from 'react';

import {View, TextInput, Text, TouchableOpacity, Image, Button} from 'react-native';

import style from './styles';

import ImageLogo from '../../assets/orangefinal.png';

export default function Login(props) {
  console.log(props);
   return (
    <View style={style.container}>
      <Image style={style.imagem} source={ImageLogo} />

      <View style={style.content}>
        <TextInput placeholder="E-mail" style={style.input} />

        <TextInput placeholder="Senha" secureTextEntry style={style.input} />

        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Acessar</Text>
        </TouchableOpacity>

        <View style={style.linha}></View>
        <Text style ={style.texto}>Não tem uma conta? <Text style={style.text}
         onPress={()=>props.navigation.navigate('Cadastro')}>
          Clique aqui para se cadastrar </Text> </Text>
      </View>
    </View>
  );
};
