import styled from 'styled-components/native';
import { useState, useContext } from 'react';
import { Button } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LoggedContext from '../contexts/Logged';

export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { updateLogged } = useContext(LoggedContext);

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Login realizado com sucesso');
        updateLogged(true)
      })
      .catch((error) => {
        console.log('Erro ao realizar login', error);
      });
  };

  return (
    <Container>
      <Titulo>Login</Titulo>
      <InputContainer>
        <DescritivoInput>Email</DescritivoInput>
        <InputEmailPassword value={email} onChangeText={(e) => setEmail(e)} />
        <DescritivoInput>Senha</DescritivoInput>
        <InputEmailPassword value={password} onChangeText={(e) => setPassword(e)} />
      </InputContainer>
      <ContainerButton>
        <Button title="Entrar" color="blue" onPress={handleLogin} />
        </ContainerButton>
        <ContainerButton>
        <Button title="Cadastrar-se" color="blue" onPress={() => navigation.navigate('Cadastro')} />
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
