
import './donation-page.scss';
import { PayPalButton } from 'react-paypal-button-v2';
import { useState } from 'react';
import Paypal from '../../components/paypal/paypal';


const DonationPage = () => {

    const [state, setState] = useState(0);
    

    return ( 
        <div>
            

            <input
                type="number"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            < Paypal input_amount ={state} />
            
            {/* <PayPalButton
            options={{
            clientId: "AUjkQCRaxwWfaykpncH2X1GtMP2sy2TRQbW-QS1j081R3Rfpx4y7Od9h8t4dxFyPAIFg_mFtvn9okKKO",
            currency: "USD",
            }}
            amount={state}
            onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);

            console.log({ details, data });
            }}
            /> */}

        </div>
     );
}
 
export default DonationPage;
