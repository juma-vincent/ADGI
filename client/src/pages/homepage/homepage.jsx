import React, { Component } from 'react';
import BannerSlider from '../../components/banner-slider/banner-slider';
import Features from '../../components/features/features';
import Footer from '../../components/footer/footer';
import './homepage.scss';

const Homepage = () => {
    
    return ( 
        <div>
        
            <div>
                <BannerSlider autoPlay={10} />
            </div>
        

            <div className='about-section' id='about'>
                <h1>About Us</h1>
                <div className='about-text'>
                African Development Goals initiative is an afro-centric alternative to the 
                Eurocentric UN sustainable development goals.

                </div>
            
            </div>

            <div className='organizational-statements'>
                <div> 
                    <h3>Vision</h3>
                    Vision content about the Afrikan Development Goals Initiative (ADGI) will be 
                    soon added.
                </div>  

                <div>
                    <h3>Mission</h3>
                    Mission content about the Afrikan Development Goals Initiative (ADGI) will be 
                    soon added.

                </div>

                
            </div>

            <div className='features-wrapper'>
                <div className='features-title'>What We Plan To Do</div>
                <Features/>
            </div>            

            
        </div>
     );
}
 
export default Homepage;