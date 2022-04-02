
import './donation-page.scss';
import Paypal from '../../components/paypal/paypal';
import Header from '../../components/header/header';
import axios from 'axios';


import { Component } from 'react';

class DonationPage extends Component {
    state = { amount: '', filled: false } 
    
    handleChange = (e)=>{
         this.setState({amount: e.target.value}) 
    }

    render() {        
        
        
        return (
            <div>
                       
    
            <div className="donation-page-wrapper">
    
                <Header /> 
    
                <h3 style={{fontSize: '29px', marginBottom:'-10px'}}> MAKE A DONATION </h3>   
    
                <div className="input-container">
                    <label htmlFor=""> <span className='label-name'> Amount in US $: </span>
                        
                        
                        <input
                            type="text"
                            value = {this.state.amount}                            
                            onChange={ (e) => this.handleChange(e) } 
                            placeholder='$'
                        />
                        {!this.state.filled? 

                        <button 
                            className='proceed-to-checkout-button'
                            onClick={ async ()=>{
                                const res = await axios.post('/api/update_amount', 
                                {  amount: this.state.amount  })
                                
                                this.setState({amount:res.data, filled: true})                            

                            }} >PROCEED TO CHECKOUT
                            
                        </button>
                        
                        : null}
                        
                    </label>
                     { this.state.filled? < Paypal input_amount ={this.state.amount}/> : null}
                    
                    
                </div>
                
            </div>           
           
    
        </div>
        );
    }
}


 
  export default DonationPage;
