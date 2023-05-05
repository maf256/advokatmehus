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
            <div className={styles.burger} onClick={()=> setHamIsOn(!hamIsOn)}>
                <div className={styles.bar1} style={{ transform: hamIsOn ? 'rotate(45deg)' : 'rotate(0)' }}></div>
                <div className={styles.bar2} style={{ transform: hamIsOn ? 'translateX(100%)' : 'translateX(0)', opacity: hamIsOn ? 0 : 1 }}></div>
                <div className={styles.bar3} style={{ transform: hamIsOn ? 'rotate(-45deg)' : 'rotate(0)' }}></div>
            </div>
            <RightNav selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} hamIsOn={hamIsOn} setHamIsOn={setHamIsOn}/> 
        </div>
    )
}
