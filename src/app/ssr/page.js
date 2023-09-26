"use client";
import { useState } from 'react'
import { HeaderTW, HeroTW } from '../components'


export default function page() {

  return (
    <div>
      <HeaderTW     style={{position:'absolute', zIndex:9, width:'100%'}} nav={[{ name: 'SSR HOME', href: '/ssr' }, { name: 'Page1', href: '/ssr/page1' }, { name: 'Page2', href: '/ssr/page2' }]} />
      <HeroTW title='SSR HOME' />


    </div>
  )
}
