import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../arrow/arrow';
import Dots from '../dots/dots';
import Slide from '../slide/slide';
import './banner-slider.scss';
import { ImageSliderContainer} from './banner-slider.styles';

const bannerData=[
{title:'Girls and Mothers Rescue Services', 
subtitle:'A safe haven for girls and mothers', 
buttonText:'',
link:'/contact',
imageUrl:'/images/img1.jpg'},

{title:"We seek solutions to women’s rights violation", 

subtitle:'', 
buttonText:'',
// link:'https://api.whatsapp.com/send?phone=254701032469',
link:'/event-booking',
imageUrl:'/images/img2.jpg'},

{title:'We care about your mental health', 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/img4.jpg'},

{title:"Let's break the cycle of violence", 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/img5.jpg'},

]



const BannerSlider = ({autoPlay}) => {
    const [x, setX] = useState(0);

    const autoPlayRef = useRef();

    useEffect(()=>{
        autoPlayRef.current= goRight;
    })

    useEffect(()=>{
        const play = ()=>{
          autoPlayRef.current()
        }
        if(autoPlay){
          const interval = setInterval(play, autoPlay* 1000);
          return ()=> clearInterval(interval)
        }
        
      },[])

    const goLeft= ()=>{
        x === 0? setX(-100*(bannerData.length -1)) : setX(x+100);        
        
    }

    const goRight= ()=>{
        (x === -100*(bannerData.length -1))? setX(0) : setX(x-100);        
    }

    return (
        <ImageSliderContainer>
            
            {bannerData.map(({imageUrl, title, subtitle, buttonText,link })=> 
                    
                       
                    <Slide key={imageUrl}
                    x={x}
                    imageUrl={imageUrl} 
                    title={title} 
                    subtitle={subtitle} 
                    buttonText={buttonText}
                    link={link}
                    />
                )
            }
            <Arrow direction='left' handleClick={goLeft}/>
            <Arrow direction='right' handleClick={goRight}/>
            <Dots arraydata={bannerData} activeIndex={x}/>
            
        </ImageSliderContainer>
      );
}
 
export default BannerSlider;