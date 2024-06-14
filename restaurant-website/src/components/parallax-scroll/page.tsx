'use client';
import { Key, useEffect, useRef, useState } from 'react';
import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion';
import gallery from '../gallery-animation/gallery';
import { height } from '../navbar/script';

const images = [
  "parallax-1.jpg",
  "parallax-2.jpg",
  "parallax-3.jpg",
  "parallax-4.jpg",
  "parallax-5.jpg",
  "parallax-6.jpg",
  "parallax-7.jpg",
  "parallax-8.jpg",
  "parallax-9.jpg",
  "parallax-10.jpg",
  "parallax-11.jpg",
  "parallax-12.jpg",
]

export default function ParallaxScroll() {

    const  gallery = useRef(null);
    const [dimension, setDimension] = useState({height: 0, width: 0});

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })

    const {height} = dimension;

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  
  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }
  
    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.addEventListener("resize", resize)
    }
}, [])


  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} y={y}/>
          <Column images={[images[3], images[4], images[5]]} y={y1}/>
          <Column images={[images[6], images[7], images[8]]} y={y2}/>
          <Column images={[images[9], images[10], images[11]]} y={y3}/>
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  )
}

const Column = ({images, y} : any) => {
  return (
    <motion.div 
      className={styles.column}
      style={{y}}
      >
      {
        images.map( (src: any, i: Key | null | undefined) => {
          return <div key={i} className={styles.imageContainer}>
            <Image 
              src={`/images/${src}`}
              alt='image'
              fill
            />
          </div>
        })
      }
    </motion.div>
  )
}