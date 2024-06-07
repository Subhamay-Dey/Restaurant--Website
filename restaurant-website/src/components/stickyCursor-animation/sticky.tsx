'use client';
import styles from './sticky.module.scss'
import { useRef } from 'react';
import Header from './header/page';
import StickyCursor from './stickycursor/page';

export default function magneticMenu() {
  
  const stickyElement = useRef(null);

  return (
    <main className={styles.main}>
      <Header ref={stickyElement}/>
      <StickyCursor stickyElement={stickyElement}/>
    </main>
  )
}