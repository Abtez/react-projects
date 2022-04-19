import React from 'react';
import About from './About';
import Footer from './Footer';
import Interest from './Interests';

export default function Card1(){
    return (
        <>
         <div className='card bg-dark'>
            <div className='card1'>
                <div className='my-photo'></div>
                    <div className='main-profile-info'>
                        <div className='my-info'>
                        <h1 className='my-name'>Abzed Mohammed</h1>
                        <p className='my-title'>Full Stack Developer</p>
                        <p className='my-email'>ibraabzed@gmail.com</p>                       
                        <button className='email-button'>Email</button>
                        <button className='linkedin-button'>LinkedIn</button>         
                        <About />
                        <Interest />
                        <Footer />
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}