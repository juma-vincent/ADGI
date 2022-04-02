import { DECREMENT_DONATION_AMOUNT, INCREMENT_DONATION_AMOUNT } from "./payment-action-types";


export const incrementDonationAmount = (character) => ({
    type: INCREMENT_DONATION_AMOUNT,
    
  });


export const decrementDonationAmount = (character) => ({
  type: DECREMENT_DONATION_AMOUNT,
  
});