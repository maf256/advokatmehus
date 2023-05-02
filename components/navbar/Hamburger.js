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