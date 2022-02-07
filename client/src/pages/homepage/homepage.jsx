import React, { Component } from 'react';
import BannerSlider from '../../components/banner-slider/banner-slider';
import './homepage.scss';

const Homepage = () => {
    return ( 
        <div>
            {/* <div className='header'>
                 Girls and Mothers Rescue Services 
            </div> */}
            <div>
                <BannerSlider autoPlay={10} />
            </div>
        </div>
     );
}
 
export default Homepage;