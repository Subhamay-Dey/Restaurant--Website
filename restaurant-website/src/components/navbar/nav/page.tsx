'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../script';
import Body from './body/page';
import Footer from './footer/page';
import Image from './image/page';

const links = [
  {
    title: "Home",
    href: "/",
    src: "navbar-img1.jpg"
  },
  {
    title: "Shop",
    href: "/shop",
    src: "navbar-img2.jpg"
  },
  {
    title: "About Us",
    href: "/about",
    src: "navbar-img3.jpg"
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "navbar-img4.jpg"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "navbar-img5.jpg"
  }
]

export default function Nav() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} selectedLink={selectedLink}/>
      </div>
    </motion.div>
  )
}