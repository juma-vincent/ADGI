import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleDonationSuccessOn } from "../../redux/modals/modal-actions";



const Paypal = ({input_amount, toggleDonationSuccessOn}) => {

  const navigate = useNavigate();
  const paypal = useRef();
  useEffect(()=>{
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          purchase_units:[
            {
              amount: {
                value:`${input_amount}`
              }
            }
          ]
        })
      },

      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
        toggleDonationSuccessOn();
        navigate('/'); 
      },

      onError: (err)=>{
        console.log(err)
      }

    }).render(paypal.current)

  }, [])

  return ( 
  <div>
    <div ref={paypal} ></div>
  </div> );
}

const mapDispatchToProps = (dispatch) => ({
  toggleDonationSuccessOn: () =>
    dispatch(toggleDonationSuccessOn),
});
 
export default connect(null, mapDispatchToProps)(Paypal);