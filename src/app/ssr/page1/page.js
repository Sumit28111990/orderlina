"use client";
import { useState } from 'react'
import { HeaderTW, HeroTW } from '../../components'


export default function page() {

  return (
    <div>
      <HeaderTW     style={{position:'absolute', zIndex:9, width:'100%'}} />
      <HeroTW title='SSR Page 1' />
    </div>
  )
}
