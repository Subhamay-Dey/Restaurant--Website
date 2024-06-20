'use client'

import React from 'react';
import styles from "./style.module.scss"
import Main from './main/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

function ZoomParallax() {

  useEffect( () => {
    const lenis = new Lenis()
   
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    },[])

  return (
    <main className={styles.main}>
      <Main/>
    </main>
    
  )
}

export default ZoomParallax