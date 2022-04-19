import React from 'react';
import './style2.css';
import logo from '../../images/logo.png'

export default function Nav2(){
    return (
        <>
        <nav>
            <div className='nav'>
                <div className='logo-name'>
                    <a href="/"><img src={logo} alt="logo" width="50" /></a>
                    <span className='header'>ReactFact</span>
                </div>

                <ul className='nav-item'>
                    <li>React Course - Project 1</li>
                </ul>
            </div>
        </nav>
        </>
    )
}