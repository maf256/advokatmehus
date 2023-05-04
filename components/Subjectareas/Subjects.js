import React from "react";
import { Data } from "../common/Data";
import styles from './Subjects.module.css'

export const Subjects = () => {
  return <div className={styles.Container}>
    <div className={styles.Card}>
        <h1 className={styles.H1}>{Data.skills.Page2.nr.subject}</h1>
        <ul className={styles.Ul}>
            {
                Data.skills.Page2.nr.ditale.map((name, index) =>
                    <li className={styles.Li} key={index}>{name}</li>
            )
            }
        </ul>
    </div>
    <div className={styles.Card}>
        <h1 className={styles.H1}>{Data.skills.Page2.nr.subject2}</h1>
        <ul className={styles.Ul}>
            {
                Data.skills.Page2.nr.ditale2.map(({name,href, index}) =>
                    <li className={styles.Li} key={index}><a className={styles.Atag}  target="_blank" href={href}>{name}</a></li>
            )
            }
        </ul>
    </div>
  </div>
}
