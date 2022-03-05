import React from 'react';
import { useEffect, useRef } from 'react';

const Paypal = ({input_amount}) => {

    const paypal = useRef();

    useEffect(()=>{
    window.paypal.Buttons({createOrder: (data, actions, err) =>{
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {amount:{
                    currency_code:"USD",
                    value: `${input_amount}.00`
                    }
                }
            ]
        })
    },
    onApprove: async (data, actions) =>{
        const order = await actions.order.capture();
        console.log('Successful Order');
    },
    onError: (err) => {
        console.log(err);
    }

    })
    .render(paypal.current)
    }, []);
    return (
        <div ref={paypal}></div>
      );
}
 
export default Paypal;
