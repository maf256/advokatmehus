import Head from 'next/head'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'

export default function Home() {
  const [hamIsOn, setHamIsOn] = useState(false)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />       
        
      </Head>
      <main onClick={()=> setHamIsOn(false)}>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
