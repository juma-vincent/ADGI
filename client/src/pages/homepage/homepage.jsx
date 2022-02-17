import React, { Component } from 'react';
import BannerSlider from '../../components/banner-slider/banner-slider';
import Features from '../../components/features/features';
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

            <div className='about' >
                <h1>About Us</h1>
                <div className='about-text'>
                Girls and Mothers Rescue Services (GIMORES) is a Non-political and Non-profit Organization
                that was founded by young women, and registered as Non-Governmental Organization in 2022
                under the NGOs Co-ordination Act, 1990 in Kenya.
                We are a local NGO operating in Kisumu and the neighboring counties.
                The establishment of this organization was prompted by the increasing cases of sexual
                and gender-based violence (SGBV) among the girls and young mothers which mostly escalated 
                during the Covid-19 pandemic.

                GIMORES seeks to provide a temporary shelter/safe house for  sexual
                and gender-based violence survivors while also
                providing professional psycho-social support/counselling and capacity 
                building (including life skill and skill training) as a rehabilitation process for their
                normal social life and wholesomeness.
                </div>
            
            </div>

            <div className='features-wrapper'>
                <div className='features-title'>What We Do</div>
                <Features/>
            </div>
        </div>
     );
}
 
export default Homepage;