import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <>
            <Container>
                <LogoTitle>Libs</LogoTitle>
                <Perfils>
                    <Links href="#">Livros</Links>
                    <Links href="#">Salvos</Links>
                    <Links href="#">Blogs</Links>
                    <Image src="./images/icon.jpg" alt="icon-perfil" />
                </Perfils>
            </Container>
        </>
    )
}

const Container = styled.nav`
    background-color: #FAFF1D;
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
    align-items: center;
    height: 56px;
`
const LogoTitle = styled.h1`
    color: #000000;
    font-size: 16;
    margin-left: 20px;
`
const Perfils = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
`
const Links = styled.a`
    color: #000000;
    font-size: 16;
    font-weight: bold;
`

const Image = styled.img`
    width: 30px;
    height: 10%;
    
`

export default NavBar 