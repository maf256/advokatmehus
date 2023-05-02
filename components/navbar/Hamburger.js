import styled from "styled-components"
import { useRef, useEffect, useState } from "react"
import RightNav from "./RightNav"
import styles from './Hamburger.module.css'

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
    // {offset > 200 ? `${styles.Header} ${styles.Headerscroll}` : styles.Header}
    // Hamture2
    return (
        <div ref={navbarRef}>
            <div className={styles.StyledHamburger} onClick={()=> setHamIsOn(!hamIsOn)}>
                <div className={hamIsOn ? `${styles.Hamburgerclose} ${styles.Hamtrue1}` 
                    : styles.Hamburgerclose}>
                </div>
                <div className={hamIsOn ? `${styles.Hamburgerclose} ${styles.Hamtrue2}` 
                    :`${styles.Hamburgerclose} ${styles.HamburgercloseLine2}`}>
                </div>
                <div className={hamIsOn ? `${styles.Hamburgerclose} ${styles.Hamture3}` 
                    : styles.Hamburgerclose}>
                </div>
            </div>
            <RightNav selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} hamIsOn={hamIsOn} setHamIsOn={setHamIsOn}/> 
        </div>
    )
}

// const StyledHamburger = styled.div`
//     width: 2rem;
//     height: 2rem;
//     display: none;
//     position: relative;
//     z-index: 10000;
//     cursor: pointer;

//     @media (max-width:900px){
//         display: flex;
//         justify-content: space-around;
//         flex-flow: column  nowrap;
//     }
//     div {
//         width: 2rem;
//         height: 0.25rem;
//         background-color: black;
//         border-radius: 10px;
//         transform-origin: 1px;
//         transition: all 0.3s linear;
//         &:nth-child(1) {
//         transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//         }

//         &:nth-child(2) {
//         transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
//         opacity: ${({ open }) => open ? 0 : 1};
//         }

//         &:nth-child(3) {
//         transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//         }        
//     }

// `
