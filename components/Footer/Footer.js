import React from "react";
import styled from "./Footer.module.css";
import { Phone, Email, Location } from "../common/Svg";

export default function Footer() {
  return <div className={styled.FooterContainer}>
    <div className={styled.Container}>
      <div className={styled.Div}>
        <h2 className={styled.Typography}>Advokat Erling Mehus</h2>
        <a className={styled.Typography} rel="me" href="tel:+4797016105"> <Phone fontSize="20px" color='#272F3E' margin="0 5px 0 0"/>+47 970 16 105</a>
        <a className={styled.Typography} rel="me" href="mailto:erling@advokatmehus.no"><Email fontSize="20px" color='#272F3E' margin="0 5px 0 0"/>erling@advokatmehus.no</a>
      </div>
      <a className={styled.Typography} rel="me" href="https://goo.gl/maps/pg2bCwwiHtndLSU4A"><Location fontSize="23px" color='#272F3E' margin="0 5px 0 0"/>Grensen 15, 0159 Oslo</a>
    </div>
  </div>
}
