import {useContext} from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger.js'
import Link from 'next/link';

export default function Navbar ({selectedLanguage, setSelectedLanguage }) {
  return (
    <Nav >
        <Link href="/"><h1>Advokat Erling Mehus</h1> </Link>
        <Hamburger selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />        
    </Nav>
  )
}

const Nav = styled.nav `
  width: 100%;
  height: 70px;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
  background-color: #cde5dd;
  /* position: fixed; */
   h1{
      display: inline;
      color: black;
   }
`