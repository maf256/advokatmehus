import React from "react";
import { Data } from "../common/Data";
import styles from './Subjects.module.css'

export const Subjects = () => {
  return <div className={styles.mainContainer}>
    <div className={styles.container}>
        <h1 className={styles.H1}>{Data.skills.Page2.nr.subject}</h1>
        <ol className={styles.Ol}>
            {
                Data.skills.Page2.nr.ditale.map((name, index) =>
                    <li className={styles.Li} key={index}>{name}</li>
            )
            }
        </ol>
    </div>
    <div className={styles.container}>
        <h1 className={styles.H1}>{Data.skills.Page2.nr.subject2}</h1>
        <ol className={styles.Ol}>
            {
                Data.skills.Page2.nr.ditale2.map(({name,href, index}) =>
                    <a key={index} href={href}><li className={styles.Li} >{name}</li></a>
                
            )
            }
        </ol>
    </div>
  </div>;
};
