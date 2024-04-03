import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import n from './css/navbar.module.css'
import logo from '../img/logo-header.png'

const Navbar = () => {
    const navigate = useNavigate();

    function comeBack() {
        navigate(-1);
      }
  return (
    <div className={n.navbar}>
      <img src={logo} alt='logoHPotter' className={n.img}/>
      <Link to="/" className={n.tittle}> Home </Link>
      <Link to="/spells" className={n.tittle}> Spells </Link>
      <Link to="/favs" className={n.tittle}> Favs </Link>
      <Link to="/game" className={n.tittle}> Game </Link>
      <Link to="/about" className={n.tittle}> About </Link>
    </div>
  )
}

export default Navbar
