import React from 'react'
import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { Input } from '../../components/Input';
import { Container, TextContent, Title, TitleHighlight } from './styles';


const Login = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                    Implemente
                    <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
                    encare seu novo desafio profissional, evoluindo em comunidade com os melhores
                    experts. 
                </TextContent>
                <Button title="Começar agora" variant='secundary' onClick={() => null}/>
            </div>
            <div>
                <Input placeholder="email" />
            </div>
        </Container>
    </>)
}

export { Login }