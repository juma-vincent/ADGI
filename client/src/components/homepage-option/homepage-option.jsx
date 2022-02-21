import React, { useState} from 'react';
// import { toggleOptionDropdownOpen } from '../../redux/modals/modal-actions';
import './homepage-option.scss';
// import {connect} from 'react-redux';


const HomepageOption = (props) => {
    // const [open, setOpen] = useState(false);      
    
    return (         
             <span className={`${props.icon ? 'homepage-option-icon-present': ''} homepage-option `} >

                {props.icon? <span 
                // onClick={ ()=> props.toggleOptionDropdownOpen()}
                >{props.text} </span>
                            :<span>{props.text} </span>
                }  
               
                <span className='homepage-option-icon' 
                    // onClick={ ()=> props.toggleOptionDropdownOpen()}
                    >{props.icon}
                </span>  

                { props.isOptionOpen && props.children } 
                {/* The above code means if open is true, render props.children       */}
              
              </span>
        
     );
}

 export default HomepageOption; 

// const mapDispatchToProps = (dispatch) => ({
//   toggleOptionDropdownOpen: () => dispatch(toggleOptionDropdownOpen),
// });

// const mapStateToProps = ({navtoggle}) => ({
//   isOptionOpen : navtoggle.optionDropdownIsOpen 
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Option); 