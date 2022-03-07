
import ReactDOM from 'react-dom';
import './donation-success-modal.scss';
import { ReactComponent as CheckMark} from '../../../assets/checkmark2.svg'
import { connect } from 'react-redux';
import { toggleDonationSuccessOn } from '../../../redux/modals/modal-actions';






const DonationSuccessModal = ({isDonationSuccessOpen, toggleDonationSuccessOn}) => {    
    
    return ReactDOM.createPortal(
        <>
         {isDonationSuccessOpen? 
         (
         <div className='modal-wrapper' 
         onClick={() => toggleDonationSuccessOn()} 
         >  

          <div onClick={(e) => e.stopPropagation()}>
              
          </div>              
             
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className='check-mark'>
                <CheckMark fill='green' height='42px' width='52px' onClick={()=>toggleDonationSuccessOn()}/> 
                </div>

                <div className='modal-header'>
                Thank you for your donation!
                </div>

                <div className='modal-text'>
                  Your funds have been received.
                </div>

                <div >
                  <button className='success-button' onClick={() => toggleDonationSuccessOn()}>OK</button>
                </div>
                
            </div>
                

          </div>)
         :
          null}
            

        </>,
        document.querySelector('#donation-success-modal')
    )
}

const mapStateToProps = ({successModal}) => ({
    isDonationSuccessOpen: successModal.donationSuccesOn
  });

const mapDispatchToProps = (dispatch) => ({
  toggleDonationSuccessOn: () => dispatch(toggleDonationSuccessOn),
});

export default connect(mapStateToProps, mapDispatchToProps)(DonationSuccessModal);
