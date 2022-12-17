import React from 'react'
import { Button } from '../Button';
import  Logo  from '../../assets/logo-dio.png';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
        <Container>
            <Row>
               <img src ={Logo} alt="logo da dio" />
                {autenticado ? (
                  <>
                  <BuscarInputContainer>
                    <Input placeholder='Buscar...'/>
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                  </>
                ) : null}
               
            </Row>
            <Row>
              {autenticado ? (
                <UserPicture src='https://avatars.githubusercontent.com/u/106411312?s=400&u=8fd2bb7de3128de5284524fbe4dced138c344268&v=4'/>
              ) : (
                <>
                  <MenuRight href='/'>Home</MenuRight>
                  <Button title='Entrar'/>
                  <Button title='Cadastrar'/>
                </>
              )}
              
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }