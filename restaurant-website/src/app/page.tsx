"use client";
import Home from '@/components/gallery-animation/gallery'
import React from 'react';
import Menu from "../components/navbar/page"
import MagneticMenu from '@/components/stickyCursor-animation/sticky';
import Footer from '@/components/footer/Intro';
import ParallaxScroll from '@/components/parallax-scroll/page';
import Seacat from '@/components/seacat/page';
import Loader from '@/components/loader';
import ZoomParallax from '@/components/zoomParallax-animation/page';

function page() {

  return (
    <div className=''>
      <Menu/>
      <Loader/>
      <Home/>
      {/* <MagneticMenu/> */}
      <ZoomParallax/>
      <ParallaxScroll/>
      <Footer/>
    </div>
  )
}

export default page