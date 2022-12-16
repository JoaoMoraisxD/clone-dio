import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 27px;

    display:Flex;
    justify-content: space-between;
    aling-itens: center;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
`
export const Wrapper = styled.div`
    background-color:#151515;
    width: 100%;
    heigth: 47px;
    display:flex;
    justify-content: center;
    align-itens: center;
`
export const BuscarInputContainer = styled.div`
    width: 175px;
    height 23px;
    background: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    aling-itens: center;
    justtify-content: center;
`
export const Menu = styled.a`
    font-family: 'Open sans',
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ffff;
    margin-right: 12px;
    text-decoration: none;
`
export const MenuRight = styled.a`
    font-family: 'Open sans',
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #ffff;
    margin-right: 12px;
    text-decoration: none;
`
export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-readius: 22px;
    border: 2px solid #ffff
`
export const Input = styled.input`
    background: transparent;
    flex:1;
    border: 0;
    color: #ffff;
    
`