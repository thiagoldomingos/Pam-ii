import * as React from 'react';
import { Text, View, Button, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../src/services/firebase";
import * as Animatable from 'react-native-animatable';
import { Link } from 'expo-router';

export default function Index() {
  // Criação de estados para armazenar emails e senhas
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Criação de função para cadastro
  function cadastro() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Alerta de sucesso
        alert('Cadastro bem-sucedido');
      })
      .catch((error) => {
        // Alerta de erro com a mensagem do erro
        alert('ERRO: ' + error.message);
      });
  }

  return (
    <SafeAreaView style={styles.contentContainerStyle}>
      <View>
        <Animatable.Image
          animation="flipInY"
          style={styles.img}
          source={{ uri: 'https://www.achetudoeregiao.com.br/sp/sao_paulo/gifs/sao_paulo.jpg' }}
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
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.container}>
        <Link href="/about">
          <Button
            title="Cadastrar"
            color="#49708a"
            onPress={cadastro}
          />
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    borderRadius: 30,
    width: 250,
    height: 200,
    marginBottom: 20,
  },
  container: {
    margin: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
    width: '80%',
  },
});
