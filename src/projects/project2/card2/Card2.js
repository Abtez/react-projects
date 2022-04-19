import React from 'react';
import About from './About';
import Footer from './Footer';
import Interest from './Interests';

export default function Card2(){
    return (
        <>
         <div className='card bg-dark'>
            <div className='card1'>
                <div className='my-photo'></div>
                    <div className='main-profile-info2'>
                        <div className='my-info'>
                        <h1 className='my-name2'>Abzed Mohammed</h1>
                        <p className='my-title2'>Full Stack Developer</p>
                        <p className='my-email2'>ibraabzed@gmail.com</p>                       
                        <button className='email-button2'>Email</button>
2                        <About />
                        <Interest />
                        <Footer />
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}