import React from 'react'
import { Header } from '../../components/Header';
import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome='Joao Morais' image='https://avatars.githubusercontent.com/u/106411312?s=400&u=8fd2bb7de3128de5284524fbe4dced138c344268&v=4' />
                <UserInfo percentual={75} nome='Joao Morais' image='https://avatars.githubusercontent.com/u/106411312?s=400&u=8fd2bb7de3128de5284524fbe4dced138c344268&v=4' />
                <UserInfo percentual={60} nome='Joao Morais' image='https://avatars.githubusercontent.com/u/106411312?s=400&u=8fd2bb7de3128de5284524fbe4dced138c344268&v=4' />
                <UserInfo percentual={50} nome='Joao Morais' image='https://avatars.githubusercontent.com/u/106411312?s=400&u=8fd2bb7de3128de5284524fbe4dced138c344268&v=4' />
                <UserInfo percentual={35} nome='Joao Morais' image='https://avatars.githubusercontent.com/u/106411312?s=400&u=8fd2bb7de3128de5284524fbe4dced138c344268&v=4' />
            </Column>
        </Container>
    </>)
}

export { Feed } 