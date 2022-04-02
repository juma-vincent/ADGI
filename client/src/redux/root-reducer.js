import { combineReducers } from 'redux';
import { SuccessMessageToggleReducer } from './modals/modals.reducer';
import { UpdateDonationInputReducer } from './payment/payment-reducer';


const rootReducer = combineReducers({
    successModal: SuccessMessageToggleReducer,  
    donationInput: UpdateDonationInputReducer  
});

export default rootReducer;
