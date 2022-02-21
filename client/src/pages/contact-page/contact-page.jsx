import React from 'react';
import { FormContainer } from './contact-page.styles';
// import emailjs from 'emailjs-com';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
// import { toggleSuccessMessageOn } from '../../redux/modals/modal-actions';
import Header from '../../components/header/header';
import './contact-page.scss';




const ContactPage = () =>{

    const [submitBtnText, setSubmitBtnText ] = useState('Send Message');
    const navigate = useNavigate();

    // const sendEmail = (event) => {
    //   event.preventDefault();
    //   emailjs.sendForm(
    //             'service_iqi3ux5', 
    //             'template_yaoszq9', 
    //             event.target,
    //             'user_QmHFtyrlogy5xgJtaCrYY'
    //             ).then(res=>{                  
    //                 toggleSuccessMessageOn();                  
    //                   navigate('/');
                    
    //             }).catch(error=>navigate('/')

    //             );

    // }

    return(
      <div className='contact-page-wrapper'>
          <Header/>          
  
          <h2 style={{fontSize: '29px'}}> Contact Us</h2>        
      
          <form 
          // onSubmit={this.sendEmail} 
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
              
              
              
              
                  <span style={{marginLeft: '6px'}} >
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

  



  
    
      // sendEmail= (event)=>{

      //   const { toggleSuccessMessageOn, history } = this.props; 
      // const navigate = useNavigate();======USE THIS INSTEAD of history
         
      //     event.preventDefault();
      //     emailjs.sendForm(
      //         'service_iqi3ux5', 
      //         'template_yaoszq9', 
      //         event.target,
      //         'user_QmHFtyrlogy5xgJtaCrYY'
      //         ).then(res=>{                  
      //             toggleSuccessMessageOn();
      //             history.push('/')
                    //  navigate('/')=====USE THIS
                  
      //         }).catch(error=>history.push('/')

      //         );
               
      // }
     
  
      


// const mapDispatchToProps = (dispatch) => ({
//     toggleSuccessMessageOn: () =>
//       dispatch(toggleSuccessMessageOn),
//   });

  
export default ContactPage;
// export default connect(null, mapDispatchToProps)(withRouter(ContactPage));