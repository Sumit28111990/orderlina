"use client";
import { useState } from 'react'

import { HeaderTW, HeroTW, LogosTW, FeatureTW, ImageSlider, FooterTW } from './components'


export default function page() {


  return (
    <div>
      <HeaderTW     style={{position:'absolute', zIndex:9, width:'100%'}} />
      <HeroTW       title='Scan, Order & Pay ✓'  />
      <LogosTW      title='Leaders in Innovation' />
      <FeatureTW    title='Easy' />
      <FeatureTW    title='Flyers' />
      <FeatureTW    title='Kitchen' />
      <LogosTW      title='Payments' />
      <FeatureTW    title='Options' />
      <FeatureTW    title='Simpler' />
      <FeatureTW    title='Brand' />
      <FeatureTW    title='Features' />
      <ImageSlider  title={`Some of Our Happy Customers' Menus`} />
      <LogosTW      title='Integrations' />
      <FeatureTW    title='Hotel?' />
      <LogosTW      title='In Good Company' />
      <HeroTW       title='Try Orderlina' />
      <FooterTW      />
    </div>
  )
}
