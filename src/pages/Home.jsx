import styled from 'styled-components/native'
import { useState } from 'react'
import { Button } from 'react-native'
import { doc, setDoc } from 'firebase/firestore'
import dataBase from '../services/DataBase.js'

export default function Home() {

    const [produto, setProduto] = useState({
        nome: '',
        id: '',
        categoria: '',
        setor: ''
    })

    const handleNome = (text) => {
        setProduto((prevState) => ({
            ...prevState,
            nome: text
        }));
    }

    const handleCategoria = (text) => {
        setProduto((prevState) => ({
            ...prevState,
            categoria: text
        }));
    }

    const handleSetor = (text) => {
        setProduto((prevState) => ({
            ...prevState,
            setor: text
        }));
    } 
    const handleId = (text) => {
        setProduto((prevState) => ({
            ...prevState,
            id: text
        }));
    }

    const handleSalvarProduto = async () => {

        await setDoc(doc(dataBase, "Produtos", produto.nome), {
            nome: produto.nome,
            id: produto.id,
            categoria: produto.categoria,
            setor: produto.setor
        }).catch((error) => {
            console.log('Erro ao salvar o produto:', error);
          });
      };

    return (
        <Container>
            <InputText>Nome do Produto</InputText>
            <Input onChangeText={handleNome}/>
            <InputText>ID do Produto</InputText>
            <Input onChangeText={handleId} />
            <InputText>Categoria</InputText>
            <Input onChangeText={handleCategoria} />
            <InputText>Setor</InputText>
            <Input onChangeText={handleSetor} />
            <ContainerButton>
            <Button title="Cadastrar" color="blue" onPress={handleSalvarProduto} />
            </ContainerButton>
        </Container>
    )
}

const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`

const InputText = styled.Text`
font-size: 25px;
`

const Input = styled.TextInput`
width: 200px;
height: 35px;
border: 1px solid #000;
padding-left: 10px;
`

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

