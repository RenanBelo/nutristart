import react from 'react';

import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styleCadastro from './styleCadastro';

export default function Cadastro() {
  return (

       <View style={styleCadastro.container}>
       <View style={styleCadastro.content}>

        <TextInput placeholder="Informe seu Nome" style={styleCadastro.input} />

        <TextInput placeholder="Informe seu E-mail" style={styleCadastro.input} />

        <TextInput placeholder="Informe sua Senha" secureTextEntry style={styleCadastro.input} />

        <TextInput placeholder="Confirme sua Senha" secureTextEntry style={styleCadastro.input} />
      
        <TouchableOpacity style={styleCadastro.button}>
          <Text style={styleCadastro.textButton}>Avançar</Text>
        </TouchableOpacity>
      </View>
      </View> 
    
  );
};
