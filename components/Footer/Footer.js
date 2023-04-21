import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <FooterContainer>
    <Container>
      <div>
        <h4>Advokat Erling Mehus</h4>
        <a href="tel:+4797016105"><h4>+47 970 16 105 </h4></a>
        <a href="mailto:erling@advokatmehus.no"><h4>erling@advokatmehus.no</h4></a>
      </div>
      <a href="https://goo.gl/maps/pg2bCwwiHtndLSU4A"><h4>Grensen 15, 0159 Oslo</h4></a>
    </Container>
  </FooterContainer>;
}


const FooterContainer = styled.div`
    width: 100%;
    background: #cde5dd;
    background: #272F3E;
    div {
      h4 {
        display: inline;
      }
    }
    
`

const Container = styled.div`
  background: #cde5dd;
  color: black;
  letter-spacing: 2px;
  div {
    display: flex;
    flex-direction: column;
    text-align: center
  }
  @media (min-width: 900px) {
    width: 80vw;
    padding: 100px 10%;
    display: flex;
    flex-direction: column;
    text-align: center
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
