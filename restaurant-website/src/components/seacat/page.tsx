"use client"
import React from 'react';
import styles from "./style.module.scss";

function Seacat() {
  return (
    <div className={styles.body}>
          <div className={styles.main}>
            <video className={styles.video} src="/video/seacat1.webm" autoPlay={true} muted={true} loop={true}>
            </video>
          </div>
    </div>
  )
}

export default Seacat