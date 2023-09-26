"use client";
import { useEffect, useState } from 'react'
import { HeaderTW, HeroTW } from '../components'
import { redirect, usePathname } from 'next/navigation'
export default function page() {

  let pathname = usePathname()
  return (
    <div>
      <HeaderTW     style={{position:'absolute', zIndex:9, width:'100%'}} />
      
        <HeroTW title={`SLUG HOME ${pathname}`} />


    </div>
  )
}
