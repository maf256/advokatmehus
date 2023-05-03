import React from "react";
import Image from 'next/image'
import ImgUrl from '../common/img/Erling_Mehus.png'
import styles from './HomePage.module.css'
import { Data } from "../common/Data";

export default function HomePage() {
  return <div className={styles.HeaderContainer}>
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <h1 className={styles.H1}>{Data.skills.Headers.nr.name}</h1>
        <h2 className={styles.H2}>{Data.skills.Headers.nr.jobtitle}</h2>
        <div className={styles.DivButton}>
          <button className={styles.Button}>{Data.skills.Headers.nr.button1}</button>
          <button className={styles.Button}>{Data.skills.Headers.nr.button2}</button>
        </div>
      </div>
      <div className={styles.ImgContainer}>
        <Image
          src= {ImgUrl}
          alt= {Data.skills.Headers.nr.name}
          loading="eager"
          placeholder="blur"
        />
      </div>
    </div>

    <div className={styles.Text}>
      <p className={styles.Typography}>{Data.skills.Headers.nr.p1}</p>
      <p className={styles.Typography}>{Data.skills.Headers.nr.p2}</p>
      <p className={styles.Typography}>{Data.skills.Headers.nr.p3}</p>
    </div>
  </div>;
}
