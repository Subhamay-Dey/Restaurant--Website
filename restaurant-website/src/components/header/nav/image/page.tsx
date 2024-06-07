import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
import { opacity } from '../../script';

export default function Index({src, selectedLink}:any) {
  return (
    <motion.div variants={opacity} initial="initial" animate={selectedLink.isActive ? "open" : "closed"} className={styles.imageContainer}>
        <Image 
        src={`/images/${src}`}
        fill={true}
        alt="image"
        />
    </motion.div>
  )
}