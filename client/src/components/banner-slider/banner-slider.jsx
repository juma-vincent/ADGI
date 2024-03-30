import React, { useState, useRef, useEffect } from 'react';
import Arrow from '../arrow/arrow';
import Dots from '../dots/dots';
import Slide from '../slide/slide';
import './banner-slider.scss';
import { ImageSliderContainer} from './banner-slider.styles';

const bannerData=[
{title:'AFRIKAN DEVELOPMENT GOALS INITIATIVE (ADGI)', 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/ADGI.jpg'},

{title:"2025 Goal No. 1: FOOD SECURITY FOR ALL", 

subtitle:'', 
buttonText:'Read more',
link:'/goal-one',
imageUrl:'/images/food-security.jpg'},

{title:'2026 Goal No. 2: HEALTH', 
subtitle:'', 
buttonText:'',
imageUrl:'/images/health.jpg'},

{title:"2027 Goal No. 3: INFRASTRUCTURE", 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/infrastructure.jpg'},

{title:"2028 Goal No. 4: CENTRAL CURRENCY", 
subtitle:'', 
buttonText:'',
link:'/contact',
imageUrl:'/images/central-currency.jpg'},


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