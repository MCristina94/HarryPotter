import React from 'react'
import b from './css/bannerhome.module.css'
import castle from '../img/bannerCastle.jpg'
const BannerHome =() => {
  return (
    <header className={b.bg}>
       <img src={castle} alt='photoCastle' className={b.img}/>
    </header>
  )
}

export default BannerHome
