import { combineReducers } from 'redux';
import { SuccessMessageToggleReducer } from './modals/modals.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: "root",
    storage
};

const rootReducer = combineReducers({
    successModal: SuccessMessageToggleReducer,    
});

export default persistReducer(persistConfig,rootReducer);
