"use client";
import Home from '@/components/gallery-animation/gallery'
import React from 'react';
import Menu from "../components/navbar/page"
import MagneticMenu from '@/components/stickyCursor-animation/sticky';
import Footer from '@/components/footer/Intro';
import ParallaxScroll from '@/components/parallax-scroll/page';

function page() {
  return (
    <div>
      <Menu/>
      <Home/>
      <MagneticMenu/>
      <ParallaxScroll/>
      {/* <Footer/> */}
    </div>
  )
}

export default page