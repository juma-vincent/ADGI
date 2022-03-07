import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleDonationSuccessOn } from "../../redux/modals/modal-actions";


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


const Paypal = ({input_amount, toggleDonationSuccessOn}) => {

    const navigate = useNavigate();
    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: `${input_amount}`,
              },
            },
          ],
        });
      };

    const onApprove = (data, actions) => {        
        toggleDonationSuccessOn();
        navigate('/');        
        return actions.order.capture();
        
    };
      
    return ( 
        
            <PayPalButton
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                
            />
        
    );
}

const mapDispatchToProps = (dispatch) => ({
  toggleDonationSuccessOn: () =>
    dispatch(toggleDonationSuccessOn),
});

 
export default connect(null, mapDispatchToProps)(Paypal);