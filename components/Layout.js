import React from "react";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

export default function Layout({ children }) {

  return <>
    <Navbar selectedLanguage= 'nr' />
    {children  }
    </>;
}
