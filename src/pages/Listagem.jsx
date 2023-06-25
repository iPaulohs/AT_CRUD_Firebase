import styled from "styled-components/native";
import { useEffect, useState } from "react";
import { VStack } from 'native-base';
import Item from "../components/Item";
import { collection, getDocs } from 'firebase/firestore';
import dataBase from '../services/DataBase';

export default function Listagem() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(collection(dataBase, 'Produtos'));
          const data = querySnapshot.docs.map((doc) => doc.data());
          setItems(data);
        } catch (error) {
          console.log('Erro ao buscar os dados:', error);
        }
      };
  
      fetchData();

      const interval = setInterval(fetchData, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
        <Container>
        {items.map((item) => (
          <Item
            key={item.id}
            nome={item.nome}
            id={item.id}
            categoria={item.categoria}
            setor={item.setor}
          />
        ))}
      </Container>
    )
}

const Container = styled(VStack).attrs({
flex: 1,
alignItems: "center",
})`
padding-top: 50px;
`