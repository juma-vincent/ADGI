import { DECREMENT_DONATION_AMOUNT, INCREMENT_DONATION_AMOUNT } from "./payment-action-types";



const INITIAL_STATE = {    
    value: 20
};

export const UpdateDonationInputReducer =  (state = INITIAL_STATE, action) =>{
    switch(action.type){
        
        case INCREMENT_DONATION_AMOUNT:
            return { ...state, value: state.value + 5 };     
            
        case DECREMENT_DONATION_AMOUNT:
            return { ...state, value:  state.value === 5 ? 5 : state.value - 5};        
        
        
        default:
            return state;
    }
};