import React from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import picture1 from "../../../../public/images/picture1.jpeg"

function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.el}>
          <div className={styles.imageContainer}>
            <Image src={picture1} fill alt="image" placeholder='blur'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main