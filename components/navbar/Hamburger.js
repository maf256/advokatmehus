import styled from "styled-components"
import { useContext } from "react"
import RightNav from "./RightNav"
import AppContext from "../Context/AppContext"

export default function Hamburger({selectedLanguage, setSelectedLanguage }) {
    
    const context = useContext(AppContext)
    console.log('contact.hamIsOn =>',context.hamIsOn);

    return (
        <>
            <StyledHamburger onClick={() => context.setHamIsOn(!context.hamIsOn) }>
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburger>
            <RightNav selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage}/> 
        </>
    )
}

const StyledHamburger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: none;
    z-index: 100;
    cursor: pointer;

    @media (max-width:900px){
        display: flex;
        justify-content: space-around;
        flex-flow: column  nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: black;
        border-radius: 10px;
            
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }        
    }

`
