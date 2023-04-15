import React from "react";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

export default function Layout({ children }) {
    const [hamIsOn, setHamIsOn] = useState(false)

  return <>
    <Navbar selectedLanguage= 'nr' hamIsOn={hamIsOn} setHamIsOn={setHamIsOn}/>
    {children}
    </>;
}
