import React from "react";
import "./homepage-header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HomepageOption from "../homepage-option/homepage-option";
import CustomLink from "../custom-link/custom-link";


// import { ReactComponent as DownArrow} from '../../assets/icons/down-arrow11.svg';

// import DropDownMenu from "../drop-down-menu/drop-down-menu";
// import CartIcon from "../cart-icon/cart-icon";
// import CartDropdown from "../cart-dropdown/cart-dropdown";
import { useLocation } from "react-router-dom";






const HomepageHeader = () => {  
  
  const location = useLocation();


  return (
            
    <div className="homepage-header">

      <Link to="/" className="homepage-header-logo-container">
        <img src="/images/logo-white.png" alt="" className="homepage-header-logo" />      
        
      </Link>
      
      <div className="homepage-header-right-side-section">
            <div className='homepage-header-upper-division'>      
        
                <div className= "homepage-header-options" >
                    
                    
                    <Link to="/" >
                    <HomepageOption text='Home'/>
                    </Link>                    
                    {/* <span>
                      <HomepageOption text='Occasions' icon={<DownArrow fill='gray' height='18px' width='14px'
                      style={{marginBottom:'-5px'}} 
                      />}>
                        <DropDownMenu />
                      </Option>
                    </span> */}

                    <Link to="/contact" >
                    <HomepageOption text='Contact'/>
                    </Link> 
                    
                    
                    {location.pathname === '/'?
                    (<>
                    
                    <CustomLink text='about'  >
                    <HomepageOption text='About'/>
                    </CustomLink>
                    
                    </>
                    )
                    :null
                    }
                    
                     
                    
                                           
                </div>
            </div>

            
            
        </div>

        
      
    </div> 
    
  );
};



  
export default HomepageHeader;