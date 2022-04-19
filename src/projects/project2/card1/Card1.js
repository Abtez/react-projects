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
                        <a href="mailto:ibraabzed@gmail.com"><button className='email-button'><i className="fas fa-envelope"></i> Email</button></a>
                        <a href="https://www.linkedin.com/in/abzed-mohammed-630bb181/" rel="noreferrer" target='_blank'>
                        <button className='linkedin-button'><i className="fab fa-linkedin"></i> LinkedIn</button>
                        </a>         
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