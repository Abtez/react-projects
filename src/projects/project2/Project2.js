import React from 'react';
import Card1 from './card1/Card1';
import Card2 from './card2/Card2';
import Nav2 from './Nav2';


export default function Project2(){
    return(
        <>
        <Nav2 />
        <div className='all-cards'>
        <Card1 />
        <Card2 />
        </div>
        </>
    )
}