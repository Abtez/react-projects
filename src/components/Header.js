import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
          <header>
            <nav className='main-nav'>
              <img src={logo} alt="logo" width="50" className='img' />
              <ul className='nav-items'>
              <Link className='links' to={'/'}><li>Home</li></Link>
              <Link className='links' to={'projects'}><li>Projects</li></Link>
              <Link className='links' to={'contacts'}><li>Contact</li></Link>
              </ul>
            </nav>
          </header>
    )
  }