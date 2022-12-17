import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin ,Title, TitleLogin, Wrapper } from './styles'


const Login = () => {
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para voce aprender com experts, Dominar as principais 
                    tecnologias e entrar mais rapido nas empresas desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                <form>
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" type="password" />
                    <Button title="Entrar" variant='secundary' onClick={handleClickSignIn}/>
                </form>
                </Wrapper>
                <Row>
                    <EsqueciText>Esqueci Minha senha</EsqueciText>
                    <CriarText>Criar Contar</CriarText>
                </Row>
            </Column>
        </Container>
    </>)
}

export { Login }