"use client"
import React, { useRef } from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import picture1 from "../../../../public/images/picture1.jpeg"
import { useScroll, useTransform, motion } from 'framer-motion';

function Main() {

  const container = useRef(null)

const {scrollYProgress} = useScroll({
  target: container,
  offset: ['start start', 'end end']
})

  const scale4 = useTransform(scrollYProgress, [0, 1], [0, 4])

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        <div className={styles.el}>
          <motion.div style={{scale: scale4}} className={styles.imageContainer}>
            <Image src={picture1} fill alt="image" placeholder='blur'/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Main