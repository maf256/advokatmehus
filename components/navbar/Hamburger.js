import styled from "styled-components"
import { useRef, useEffect, useState } from "react"
import RightNav from "./RightNav"

export default function Hamburger({selectedLanguage, setSelectedLanguage }) {
    const navbarRef = useRef(null)
    const [hamIsOn, setHamIsOn] = useState(false)
    useEffect(()=> {
        if (hamIsOn){
            const listener = e => {
                if (navbarRef.current && e.target !== navbarRef.current && !navbarRef.current.contains(e.target)){
                    setHamIsOn(false)
                }
            }
            window.addEventListener("click", listener)
            return ()=> {
                window.removeEventListener("click", listener)
            }    
        }
    }, [hamIsOn])
    
    return (
        <div ref={navbarRef}>
            <StyledHamburger open={hamIsOn} onClick={()=> setHamIsOn(!hamIsOn)}>
                <div></div>
                <div></div>
                <div></div>
            </StyledHamburger>
            <RightNav selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} hamIsOn={hamIsOn}/> 
        </div>
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
