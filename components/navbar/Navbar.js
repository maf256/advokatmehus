import {useState, useEffect} from 'react'
import Hamburger from './Hamburger.js'
import Link from 'next/link';
import styles from './Navbar.module.css'


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
    <header className={offset < 200 ? `${styles.Header} ${styles.Headerscroll}` : styles.Header}  >
        <Link href="/"><h1 className={styles.H1}>Advokat Erling Mehus</h1> </Link>
        <Hamburger selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />        
    </header>
  )
}
