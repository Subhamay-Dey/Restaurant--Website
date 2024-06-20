"use client"
import React, { useRef } from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import picture1 from "../../../../public/images/picture1.jpeg"
import picture2 from "../../../../public/images/picture2.jpeg"
import picture3 from "../../../../public/images/picture3.jpg"
import picture4 from "../../../../public/images/picture4.jpg"
import picture5 from "../../../../public/images/picture5.jpg"
import picture6 from "../../../../public/images/picture6.jpg"
import picture7 from "../../../../public/images/picture7.jpeg"

import { useScroll, useTransform, motion } from 'framer-motion';

function Main() {

  const container = useRef(null)

const {scrollYProgress} = useScroll({
  target: container,
  offset: ['start start', 'end end']
})

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: picture1, scale: scale4
    },
    {
      src: picture2, scale: scale4
    },
    {
      src: picture3, scale: scale4
    },
    {
      src: picture4, scale: scale4
    },
    {
      src: picture5, scale: scale4
    },
    {
      src: picture6, scale: scale4
    },
    {
      src: picture7, scale: scale4
    }
  ]

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {
          pictures.map(({src, scale}, index) => {
            return <motion.div style={{scale}} key={index} className={styles.el}>
            <div className={styles.imageContainer}>
              <Image src={src} fill alt="image" placeholder='blur'/>
            </div>
          </motion.div>
          })
        }
        
      </div>
    </div>
  )
}

export default Main