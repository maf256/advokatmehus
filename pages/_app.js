import '@/styles/globals.css'
import Layout from '../components/Layout'
import { useState, createContext } from 'react'
import { ThemeProvider } from "../components/Theme";
import AppContext from '@/components/Context/AppContext';


export default function App({ Component, pageProps }) {
  
  const [hamIsOn, setHamIsOn] = useState(false)
  
  return (
    <AppContext.Provider value={{ hamIsOn, setHamIsOn }}>
      <Layout>
        <Component {...pageProps } />
      </Layout>
    </AppContext.Provider>
  )
}
 