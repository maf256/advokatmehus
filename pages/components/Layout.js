import React from "react";
import Navbar from "./navbar/Navbar";
export default function Layout({ children }) {
  return <>
    <Navbar selectedLanguage= 'nr' hamIsOn={hamIsOn} setHamIsOn={setHamIsOn}/>
    <div>{children}</div>
    </>;
}
