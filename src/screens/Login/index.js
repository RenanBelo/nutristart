import React from 'react';

import {View, TextInput, Text, Button, Image} from 'react-native';

import style from './styles';

import ImageLogo from '../../assets/orangefinal.png';

import {createUserWithEmailAndPassword} from 'firebase/auth';

import{auth} from "../../services/firebaseConnection";

export default function Login(props) {


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  

  async function createUser (){
    await createUserWithEmailAndPassword(auth,email, password).then(value =>{
      console.log('cadastrado com sucesso \n' + value.user.uid);
    })
    .catch(error => console.log(error));
  };

  console.log(props);
   return (
    <View style={style.container}>
      <Image style={style.imagem} source={ImageLogo} />

      <View style={style.content}>
        <TextInput placeholder="email" onChangeText={email => setEmail(email)} style={style.input} />

        <TextInput placeholder="senha"  onChangeText={password => setPassword(password)} secureTextEntry style={style.input} />

        <Button title="CADASTRAR" onPress={() => createUser()} style={style.button}/>
 
        <View style={style.linha}></View>
        <Text style ={style.texto}>Não tem uma conta? <Text style={style.text}
         onPress={()=>props.navigation.navigate('Cadastro')}>
          Clique aqui para se cadastrar </Text> </Text>
      </View>
    </View>
  );
};
