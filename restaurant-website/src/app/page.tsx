"use client";
import Home from '@/components/gallery-animation/gallery'
import React from 'react';
import magneticMenu from '@/components/stickyCursor-animation/sticky';

function page() {
  return (
    <>
      <Home/>
      <magneticMenu/>
    </>
  )
}

export default page