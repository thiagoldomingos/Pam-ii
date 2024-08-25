import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet, 
  SafeAreaView, Alert, Image} from "react-native";

  //Importa uma função utilizada pelo FireBase para criar um usuário com email e senha
import {createUserWithEmailAndPassword} from 'firebase/auth'

  //Importa um objteo de autenticação configurado no projeto "../src/services/firebase"
import{auth} from "../src/services/firebase";

  //Importação da biblioteca para imgs animadas
import * as Animatable from 'react-native-animatable';

export default function Index() {
  
  //Criação de estados para armazenar emails e senhas
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  
  // Criação de função assíncrona
  async function cadastro() {
    // Chama a função do FireBase para criar um novo usuario e senha
    await createUserWithEmailAndPassword(auth, email, password)

    Alert.alert("Sucesso!", "Usuário cadastrado com sucesso!")
  };


  return (
    <SafeAreaView style={styles.contentContainerStyle}>

      <View>
        <Animatable.Image
          animation="flipInY"
          style={styles.img}
          source={{
            uri: 'https://www.achetudoeregiao.com.br/sp/sao_paulo/gifs/sao_paulo.jpg'
            /*Ou utilize 
              source{require('caminho da img')}*/
          }}
        />
      </View>    

      <View style={styles.container}>
        <Text style={styles.title}>Cadastro de Usuário</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu email"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Digite sua senha"
          keyboardType="default"
        />
      </View >
    
      <View style={styles.container}>
        <Button
          title="cadastrar"
          color="#49708a"
          onPress={()=> cadastro()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    borderRadius: 30,
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  container:{
    margin: 10,
    justifyContent: 'center',
  },
  title:{
    fontFamily: 'Arial', 
    fontSize: 30,
  },
  input:{
    height: 40, // Define a altura dentro do TextInput
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10, // Adiciona padding horizontal dentro do TextInput
    margin: 10
  },
  alertBtn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
