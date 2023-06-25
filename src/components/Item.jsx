import styled from 'styled-components/native'
import { Center } from 'native-base'


export default function Item({nome, id, categoria, setor}){

    return (
    <Container>
    <Texto size="16px">{nome}</Texto>
    <Texto size="10px">{id}</Texto>
    <Texto size="14px">{categoria}</Texto>
    <Texto size="12px">{setor}</Texto>
    </Container>
    )
}

const Container = styled(Center).attrs({
    w: "64",
    h: "20",
    bg: "#ddd",
    marginBottom: "25px",
    borderRadius: "10px"
})``

const Texto = styled.Text`
font-size: ${props => props.size};
color: #000;
`