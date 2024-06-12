import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Main>
                <Card>
                    <CardInfo>
                        <Image src="./images/icon.jpg" alt="icon" />
                        <Name>Nome do autor</Name>
                        <Data>3 abril, 2014</Data>
                    </CardInfo>
                    <Title>Você sabe como ler 500 livros por ano? desculbra que é muito simples</Title>
                    <Pararaph>Ler 500 livros em um ano é possível com planejamento e disciplina.         Divida    o  número de livros
                        pelos dias do ano, resultando em cerca de 1,37 livros por dia. Use técnicas como leitura dinâmica
                        e audiolivros para otimizar o tempo. Estabeleça metas diárias e mantenha a consist...</Pararaph>
                    <Button type='submit'>Dicas</Button>
                </Card>


                <Card>
                    <CardInfo>
                        <Image src="./images/icon.jpg" alt="icon" />
                        <Name>Nome do autor</Name>
                        <Data>3 abril, 2014</Data>
                    </CardInfo>
                    <Title>Você sabe como ler 500 livros por ano? desculbra que é muito simples</Title>
                    <Pararaph>Ler 500 livros em um ano é possível com planejamento e disciplina.         Divida    o  número de livros
                        pelos dias do ano, resultando em cerca de 1,37 livros por dia. Use técnicas como leitura dinâmica
                        e audiolivros para otimizar o tempo. Estabeleça metas diárias e mantenha a consist...</Pararaph>
                    <Button type='submit'>Dicas</Button>
                </Card>

                <Card>
                    <CardInfo>
                        <Image src="./images/icon.jpg" alt="icon" />
                        <Name>Nome do autor</Name>
                        <Data>3 abril, 2014</Data>
                    </CardInfo>
                    <Title>Você sabe como ler 500 livros por ano? desculbra que é muito simples</Title>
                    <Pararaph>Ler 500 livros em um ano é possível com planejamento e disciplina.         Divida    o  número de livros
                        pelos dias do ano, resultando em cerca de 1,37 livros por dia. Use técnicas como leitura dinâmica
                        e audiolivros para otimizar o tempo. Estabeleça metas diárias e mantenha a consist...</Pararaph>
                    <Button type='submit'>Dicas</Button>

                </Card>
                <Div>
                    <ButtonBlog type='submit'>Ir para blogs</ButtonBlog>
                </Div>


            </Main>


            <Section>
                <Main2>
                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <CardBook>
                        <Titulos>
                            <ImageAutor src="./images/icon.jpg" alt="icon" />
                            <Autor>Nome do autor</Autor>
                        </Titulos>
                        <ImageBook src="#" alt="icon" />
                        <Infos>
                            <Icon src="#" alt="icon" />
                            <Icon src="#" alt="icon" />
                            <ButtonSubmit type="submit">Pedir</ButtonSubmit>
                        </Infos>
                    </CardBook>

                    <DivButton>
                        <ButtonBooks type='submit'>Ver todos os livros</ButtonBooks>
                    </DivButton>
                </Main2>

            </Section>

        </Container>
    )
}

const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    flex-direction: column;
    
`

const Main = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    width: 700px;
    
`

const Main2 = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    border-bottom: 1px solid black;
    padding: 15px;
`

const CardInfo = styled.div`
    display: flex;
    align-items: center;
    
`

const Name = styled.h3`
    font-size: 16px;
    margin-left: 10px;
`

const Data = styled.p`
    font-size: 16px;
    margin-left: 20px;
`

const Title = styled.h1`
    font-size: 15px;
    font-weight: bold;
`
const Pararaph = styled.p`
    font-size: 15px;
    line-height: 20px ;
    margin-top:30px;

`

const Image = styled.img`
    width: 25px;
    height: 10%;
    
`
const Button = styled.button`
    width: 86px;
    height: 26px;
    background-color: #57AD75;
    border-radius:50px;
    color: white;
    font-size:15px;
    font-weight: bold;
`
const ButtonBlog = styled.button`
    width: 113px;
    height: 29px;
    background-color: #3042E8;
    color: white;
    font-size:15px;
`
const Div = styled.div`
    display: flex;
    width: 730px;
    align-items: center;
    justify-content: center;
    height: 65px;
    
`

const DivButton = styled.div`
    display: flex;
    width: 730px;
    align-items: center;
    justify-content: center;
    height: 65px;
    border-top: 1px solid black;
`

const Section = styled.div`
    
    padding: 15px;
    margin-top: 200px;
    display: flex;
    gap: 29px;
    
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const CardBook = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Autor = styled.h2`
    font-size: 14px;
    margin-left: 5px;
`

const ImageAutor = styled.img`
    width: 18px;
    height: 18px;
`

const ImageBook = styled.img`
    background-color: #333;
    width: 122px;
    height: 191px;
`

const Titulos = styled.div`
    display: flex;
    align-items: center;
`

const Infos = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-top: 5px;
`

const Icon = styled.div`

    width: 20px;
    height: 20px;
    background-color: #45c545;
    gap: 10px;
`
const ButtonSubmit = styled.button`
    width: 68px;
    height: 20px;
    background-color: #3042E8;
    color: #fff;
    font-size: 14px;
    border: 1px solid black;
    
`

const ButtonBooks = styled.button`

    width: 155px;
    height: 29px;
    background-color: #3042E8;
    border: 1px solid black;
    color: white;
    font-size:15px;
`
export default Home