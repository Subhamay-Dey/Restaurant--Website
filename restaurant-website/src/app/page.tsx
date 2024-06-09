"use client";
import Home from '@/components/gallery-animation/gallery'
import React from 'react';
import Menu from "../components/navbar/page"
import MagneticMenu from '@/components/stickyCursor-animation/sticky';
import Footer from '@/components/footer/Intro';

function page() {
  return (
    <div>
      <Menu/>
      <Home/>
      <MagneticMenu/>
      <Footer/>
    </div>
  )
}

export default page