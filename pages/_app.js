import '@/styles/globals.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import { ThemeProvider } from "../components/Theme";
import AppContext from '@/components/Context/AppContext';


export default function App({ Component, pageProps }) {
  
  
  
  
//<AppContext.Provider value={{ hamIsOn, setHamIsOn }}>
  //</AppContext.Provider>
  return (
      <Layout>
        <Component {...pageProps } />
      </Layout>
  )
}
 