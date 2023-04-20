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
  </HeaderContainer>;
}

const HeaderContainer = styled.header`
    background: #cde5dd;
    padding-top: 200px;
    
`

const Container = styled.div`
  background: #272F3E;
  color: #cde5dd;
  padding: 100px 0px;
  
  @media (min-width: 900px) {
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    
  }
  @media (max-width: 900px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
        
`

const ImgContainer = styled.div`
  border-radius: 10px;
`

const TextContainer = styled.div`
  min-width: 300px;
  h1 {
    padding-bottom: 15px;;
  }
  h2 {
    padding-bottom: 15px;
  }
  div {
    padding-bottom: 15px;
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
  :hover {
      transition: all .1s ease;
      box-shadow: 0 0 0 0 #cde5dd, 0 0 0 3px #cde5dd;
  }

`

const ButtonDiv = styled.div``