import { TOGGLE_CONTACT_SUCCESS__ON, TOGGLE_DONATION_SUCCESS__ON } from "./modal-actions.types";

const INITIAL_STATE = {    
    contactSuccessOn: false,
    donationSuccesOn: false,
};


export const SuccessMessageToggleReducer =  (state = INITIAL_STATE, action) =>{
    switch(action.type){
        
        case TOGGLE_CONTACT_SUCCESS__ON:
            return { ...state, contactSuccessOn: !state.contactSuccessOn};
        case TOGGLE_DONATION_SUCCESS__ON:
            return { ...state, donationSuccesOn: !state.donationSuccesOn};
        
        default:
            return state;
    }
};
