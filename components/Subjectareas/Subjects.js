import React from "react";
import { Data } from "../common/Data";
import styles from './Subjects.module.css'
import { Dot } from "../common/Svg";


export const Subjects = () => {
  return <div className={styles.Container}>
    <div className={styles.Card}>
        <h1 className={styles.H1}>{Data.skills.Page2.nr.subject}</h1>
        <ul className={styles.Ul}>
            {
                Data.skills.Page2.nr.ditale.map((name, index) =>
                    <li className={styles.Li} key={index}><Dot fontSize="20px" color='#ff6347' margin="0 0 0 0"/>{name}</li>
            )
            }
        </ul>
    </div>
    <div className={styles.Card}>
        <h1 className={styles.H1}>{Data.skills.Page2.nr.subject2}</h1>
        <ul className={styles.Ul}>
            {
                Data.skills.Page2.nr.ditale2.map(({name,href, index}) =>
                    <li className={styles.Li} key={index}><Dot fontSize="20px" color='#ff6347' margin="0 0 0 0"/><a className={styles.Atag}  target="_blank" href={href}>{name}</a></li>
            )
            }
        </ul>
    </div>
  </div>
}

