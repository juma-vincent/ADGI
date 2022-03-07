
import ReactDOM from 'react-dom';
import './contact-success-modal.scss';
import { ReactComponent as CheckMark} from '../../../assets/checkmark2.svg'
import { connect } from 'react-redux';
import { toggleContactSuccessOn } from '../../../redux/modals/modal-actions';






const ContactSuccessModal = ({isContactSuccessOpen, toggleContactSuccessOn}) => {    
    
    return ReactDOM.createPortal(
        <>
         {isContactSuccessOpen? 
         (
         <div className='modal-wrapper' 
         onClick={() => toggleContactSuccessOn()} 
         >  

          <div onClick={(e) => e.stopPropagation()}>
              
          </div>              
             
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='check-mark'>
                <CheckMark fill='green' height='42px' width='52px' onClick={()=>toggleContactSuccessOn()}/> 
                </div>

                <div className='modal-header'>
                Thank you for your interest!
                </div>

                <div className='modal-text'>
                  Your message has been received and we will get back to you shortly.
                </div>

                <div >
                  <button className='success-button' onClick={() => toggleContactSuccessOn()}>OK</button>
                </div>
                
            </div>
                

          </div>)
         :
          null}
            

        </>,
        document.querySelector('#contact-success-modal')
    )
}

const mapStateToProps = ({successModal}) => ({
    isContactSuccessOpen: successModal.contactSuccessOn
  });

const mapDispatchToProps = (dispatch) => ({
  toggleContactSuccessOn: () => dispatch(toggleContactSuccessOn),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactSuccessModal);
