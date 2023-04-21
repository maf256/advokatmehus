import React from "react";
import styled from "styled-components";
import { Phone, Email, Location } from "../common/Svg";

export default function Footer() {
  return <FooterContainer>
    <Container>
      <div>
        <h4>Advokat Erling Mehus</h4>
        <a  href="tel:+4797016105"> <Phone fontSize="20px" color='#272F3E' margin="0 5px 0 0"/>+47 970 16 105</a>
        <a  href="mailto:erling@advokatmehus.no"><Email fontSize="20px" color='#272F3E' margin="0 5px 0 0"/>erling@advokatmehus.no</a>
      </div>
      <a  href="https://goo.gl/maps/pg2bCwwiHtndLSU4A"><Location fontSize="23px" color='#272F3E' margin="0 5px 0 0"/>Grensen 15, 0159 Oslo</a>
    </Container>
  </FooterContainer>;
}

const FooterContainer = styled.div`
    width: 100%;
    background: #cde5dd;
    background: #272F3E;
    a, h4 {
      color: #272F3E;
      font-size: 20px;
      width: 350px;
      text-align: center;
      font-weight: 600;
      display: inline;
      margin-bottom: 5px;
    }    

`

const Container = styled.div`
  background: #cde5dd;
  color: black;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 900px) {
    width: 80vw;
    padding: 50px 10%;
    display: flex;
    flex-direction: column;
    text-align: center
  }
  @media (max-width: 900px) {
    width: 100vw;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
        
`
