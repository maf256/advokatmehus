import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Hamburger from './Hamburger.js'
import Link from 'next/link';

export default function Navbar ({selectedLanguage, setSelectedLanguage }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setOffset(window.pageYOffset))
    return () => {
        return (
            window.removeEventListener('scroll', () => setOffset(window.pageYOffset))
        )
    }
}, []);

  
  return (
    <Nav YOffset={offset} >
        <Link href="/"><h1>Advokat Erling Mehus</h1> </Link>
        <Hamburger selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />        
    </Nav>
  )
}

const Nav = styled.header `
  width: 100%;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
  background-color: #cde5dd;
  position: relative;
  ${({ YOffset }) => YOffset > 200 ?
        `   height: 4rem; 
            box-shadow: 0px 2px 5px rgb(0 0 0 / 10%);
        `
        :
        `   height: 5rem; 
            box-shadow: 0;
        `
    }
      transition: all .5s ease-in-out;
      position: fixed;
      z-index: 1001;
   h1{
      display: inline;
      color: black;
   }
`