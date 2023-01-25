import React from 'react'
import {MdEmail, MdLock} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin ,Title, TitleLogin, Wrapper } from './styles'
import { api } from '../../services/api';

const schema = yup.object({
    email: yup.string().email('E-mail não é valido').required('Campo obrigatorio'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatorio'),
  }).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    
    const onSubmit = async formData => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else{
                alert('Email ou senha invalido')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };


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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='email' control={control}  placeholder="E-mail"  leftIcon={<MdEmail />}/>
                    <Input name='password' control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                    <Button title="Entrar" variant='secundary' type='submit'/>
                </form>
                <Row>
                    <EsqueciText>Esqueci Minha senha</EsqueciText>
                    <CriarText>Criar Contar</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }