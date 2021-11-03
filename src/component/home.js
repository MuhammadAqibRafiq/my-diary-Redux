import React from 'react'
import './style.css';
import bg from './img/background.jpg'
import Navbar from './navbar';
import Slider from './Carousel';


const home = () => {
    return (
        <div className='home'>
            <img src={bg} className='bg' alt='' />
            <Navbar />
            <Slider />
        </div>
    )
}

export default home
