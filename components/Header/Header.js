import React from "react";
import styled from "styled-components"
import Image from 'next/image'
import ImgUrl from '../common/img/Erling_Mehus.png'

export default function Header() {
  return <HeaderContainer>
    <Container>
      <TextContainer>
        <h1>Erling Mehus</h1>
        <h2>Advokat</h2>
        <ButtonDiv>
          <Button>Kontakt meg</Button>
          <Button>Omtalte saker</Button>
        </ButtonDiv>
      </TextContainer>
      <ImgContainer>
        <Image
          src= {ImgUrl}
          alt="Erling Mehus"
          loading="lazy"
          placeholder="blur"
          objectFit="content"
        />
      </ImgContainer>
    </Container>

    <Text>
      <Typography>Jeg påtar meg kun oppdrag som jeg har kompetanse og erfaring til å fullføre frem til en best mulig minnelig løsning eller dom.</Typography>
      <Typography>Grundig og tidlig vurdering av alle sakens sider er en sentral del av mitt arbeide som advokat.</Typography>
      <Typography>Ta kontakt for en uforpliktende samtale dersom du har behov for advokatbistand.</Typography>
    </Text>
  </HeaderContainer>;
}

const HeaderContainer = styled.header`
    background: #cde5dd;
    padding-top: 200px;
`

const Container = styled.div`
  background: #272F3E;
  color: #cde5dd;
  letter-spacing: 2px;
  @media (min-width: 900px) {
    width: 80vw;
    padding: 100px 10%;
    display: flex;
    justify-content: space-evenly;
    
  }
  @media (max-width: 900px) {
    width: 100vw;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
        
`

const ImgContainer = styled.div`
  border-radius: 10px;
  margin: 1px;
`

const TextContainer = styled.div`
  min-width: 350px;
  h1 {
    padding-bottom: 20px;;
  }
  h2 {
    padding-bottom: 20px;
  }
  div {
    padding-bottom: 20px;
    display: flex;;
    justify-content: space-between;
  }
`

const Button = styled.button`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 3px;
  padding: 12px 24px;
  border: 0;
  color: #cde5dd;
  background: #000a47;
  line-height: 1.15;
  font-size: 16px;
  letter-spacing: 1px;
  
  :hover {
      transition: all .1s ease;
      box-shadow: 0 0 0 0 #cde5dd, 0 0 0 3px #cde5dd;
  }

`

const ButtonDiv = styled.div`

`


const Typography = styled.p`
  background: #272F3E;
  color: #cde5dd;
  margin-bottom: 20px;;
`

const Text = styled.div`
  background: #272F3E;
  color: #cde5dd;
  letter-spacing: 2px;
  font-size: 20px;
  padding: 2px;
  
  @media (min-width: 900px) {
    width: 80vw;
    padding: 100px 10%;
    
  }
  @media (max-width: 900px) {
    width: 100vw;
    padding: 50px 0px;
  }


`