import React from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';

function index() {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}></div>
    </div>
  )
}

export default index