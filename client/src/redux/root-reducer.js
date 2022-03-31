import { combineReducers } from 'redux';
import { SuccessMessageToggleReducer } from './modals/modals.reducer';

const rootReducer = combineReducers({
    successModal: SuccessMessageToggleReducer,    
});

export default rootReducer;
