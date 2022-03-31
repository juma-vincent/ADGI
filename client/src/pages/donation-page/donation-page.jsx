
import './donation-page.scss';
import { useState } from 'react';
import Paypal from '../../components/paypal/paypal';
import Header from '../../components/header/header';



const DonationPage = () => {

const [state, setState] = useState('0.01');
    

    return ( 
        <div>
                       

            <div className="donation-page-wrapper">

                <Header /> 

                <h3 style={{fontSize: '29px', marginBottom:'-10px'}}> MAKE A DONATION </h3>   

                <div className="input-container">
                    <label htmlFor=""> <span className='label-name'> Amount in US $: </span>
                        
                        
                        <input
                            type="text"
                            value = {state === '0.01'? '' : state } // if state is 0.01, set input value
                            // to an empty string                            
                            onChange={(e) =>  setState( e.target.value)} 
                            placeholder='$'
                        />
                    </label>
                    < Paypal input_amount ={state} />
                </div>
                
            </div>           
           

        </div>
     );
}


 
export default DonationPage;
