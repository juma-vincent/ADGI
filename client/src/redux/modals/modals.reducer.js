import { TOGGLE_NAVIGATION_OPEN, TOGGLE_SUCCESS_MESSAGE_ON } from "./modal-actions.types";

const INITIAL_STATE = {    
    successMessageOn: false
};


export const SuccessMessageToggleReducer =  (state = INITIAL_STATE, action) =>{
    switch(action.type){
        
        case TOGGLE_SUCCESS_MESSAGE_ON:
            return { ...state, successMessageOn: !state.successMessageOn};
        
        default:
            return state;
    }
};
