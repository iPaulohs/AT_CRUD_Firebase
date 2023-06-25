import styled from 'styled-components/native';
import { useState } from 'react';
import { Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Conta criada com sucesso', userCredential.user);
      })
      .catch((error) => {
        console.log('Erro ao criar conta', error);
      });
  };

  return (
    <Container>
      <Titulo>Cadastro</Titulo>
      <InputContainer>
        <DescritivoInput>Email</DescritivoInput>
        <InputEmailPassword value={email} onChangeText={(e) => setEmail(e)} />
        <DescritivoInput>Senha</DescritivoInput>
        <InputEmailPassword value={password} onChangeText={(e) => setPassword(e)} />
      </InputContainer>
      <ContainerButton>
        <Button title="Cadastrar" color="blue" onPress={handleCadastro} />
      </ContainerButton>
      <ContainerButton>
        <Button title="Logar-se" color="blue" onPress={() => navigation.navigate('Login')} />
      </ContainerButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

const Titulo = styled.Text`
  font-size: 35px;
  margin: 25px auto;
`;

const InputContainer = styled.View`
  border: 2px solid black;
  align-self: center;
  width: 80%;
  height: 40%;
  justify-content: center;
`;

const DescritivoInput = styled.Text`
  font-size: 16px;
  margin-left: 15%;
  margin-bottom: -10px;
`;

const InputEmailPassword = styled.TextInput`
  border: 2px solid black;
  width: 85%;
  height: 50px;
  margin: 25px auto;
  padding-left: 25px;
`;

const ContainerButton = styled.View`
  background-color: blue;
  margin: 15px auto;
  border-radius: 10px;
  border: 2px solid black;
  width: 150px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;