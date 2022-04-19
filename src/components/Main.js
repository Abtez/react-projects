import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Main(){
    return (
      <>
      <Header />
          <div className='wrapper'>
            <h1>Reasons I'm excited to learn React</h1>
            <ol className='main'>
                <li>It looks awesome</li>
                <li>Its easy</li>
                <li>Can create large and simple websites</li>
            </ol>
          </div>
          <Footer />
      </>
    )
  }