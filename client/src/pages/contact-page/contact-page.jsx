import React from 'react';
import { FormContainer } from './contact-page.styles';
import emailjs from 'emailjs-com';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { toggleContactSuccessOn } from  '../../redux/modals/modal-actions';
import Header from '../../components/header/header';
import './contact-page.scss';





const ContactPage = ({toggleContactSuccessOn}) =>{

    const [submitBtnText, setSubmitBtnText ] = useState('Send Message');
    const navigate = useNavigate();

    const sendEmail = (event) => {
      event.preventDefault();
      emailjs.sendForm(
                'service_3n6848a', 
                'template_zh3ae1t', 
                event.target,
                'user_7C4MnP2gylmtbaDmgTiWR'
                ).then(res=>{                  
                    toggleContactSuccessOn();                  
                      navigate('/');
                    
                }).catch(error=>navigate('/')

                );

    }

    return(
      <div className='contact-page-wrapper'>
          <Header/>          
  
          <h2 style={{fontSize: '29px'}}> Contact Us</h2>        
      
          <form onSubmit={sendEmail} 
          >        
  
            <div>
              <FormContainer>
                  <label htmlFor='name'> <span className='label-name'>Your Name </span>
                      <input
                      name='name'
                      type='text'
                      required
              
                      />
                  </label>
              
                  <label htmlFor='phone'> <span className='label-name'>Phone </span>
                      <input
                      name='phone'
                      type='text'
                      required
              
                      />
                  </label >
              
                  <label htmlFor='email'><span className='label-name'>Email </span>
                      <input
                      name='email'
                      type='email'
                      required
              
                      />
                  </label>
              
                  <label htmlFor='message'><span className='label-name'>Your Message </span>
                  <textarea name="message" ></textarea>
                  </label>
              
              
              
              
                  <span style={{marginLeft: '6px'}}>
                      <input onClick={()=> setSubmitBtnText('Sending')}
                      className= {`${submitBtnText ==='Sending'? 'uploading': null}`}
                      id='btn' type='submit' value={submitBtnText}/>
              
                  </span>
              </FormContainer>

            </div>
  
            
          </form>    

          
      
      </div>
    
  
    );
}

  

    


const mapDispatchToProps = (dispatch) => ({
    toggleContactSuccessOn: () =>
      dispatch(toggleContactSuccessOn),
  });

  

export default connect(null, mapDispatchToProps)(ContactPage);