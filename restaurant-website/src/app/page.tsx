"use client";
import Home from '@/components/gallery-animation/gallery'
import React from 'react';
import Menu from "../components/navbar/page"
import MagneticMenu from '@/components/stickyCursor-animation/sticky';

function page() {
  return (
    <div>
      <Menu/>
      <Home/>
      <MagneticMenu/>
    </div>
  )
}

export default page