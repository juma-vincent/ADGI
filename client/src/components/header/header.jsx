import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

import Option from "../option/option";
// import CustomLink from "../custom-link/custom-link";
// import { withRouter } from 'react-router-dom';
// import MenuIcon from "../menu-icon/menu-icon";
// import { ReactComponent as DownArrow} from '../../assets/icons/down-arrow11.svg';

// import { toggleNavigationOpen } from "../../redux/modals/modal-actions";
// import DropDownMenu from "../drop-down-menu/drop-down-menu";
// import CartIcon from "../cart-icon/cart-icon";
// import CartDropdown from "../cart-dropdown/cart-dropdown";




const Header = () => {    

  return (
            
    <div className="homepage-header">
      <Link to="/" className="logo-container" style={{'color':'white', 'fontSize':'23px'}}>
        <img src="/images/logo-white.png" alt="" className="logo" />      
        
      </Link>
      
      <div className="sub-header-container">
            <div className='upper-division'>      
        
                <div className="options">
                    
                    
                    {/* <div onClick ={()=>toggleNavigationOpen()}>
                    <MenuIcon width='20px' height='20px'/>
                    </div>   */}
                    
                    

                    <Link to="/" >
                    <Option text='Home'/>
                    </Link>                    
                    {/* <span>
                      <Option text='Occasions' icon={<DownArrow fill='gray' height='18px' width='14px'
                      style={{marginBottom:'-5px'}} 
                      />}>
                        <DropDownMenu />
                      </Option>
                    </span> */}

                    <Link to="/contact" >
                    <Option text='Contact'/>
                    </Link> 
                    <Option text='About'/>
                    
                    {/* {match.isExact?
                    (<>
                    <CustomLink text='about'  >
                    <Option text='About'/>
                    </CustomLink>
                    
                    
                    </>
                    )
                    :null
                    } */}
                    
                    
                                           
                </div>
            </div>

            
            
        </div>

        
      
    </div> 
    
  );
};
export default Header;

// const mapStateToProps = state =>({
//   cartIsOpen: state.cart.cartIsOpen
// });

// const mapDispatchToProps = (dispatch) => ({
//     toggleNavigationOpen: () => dispatch(toggleNavigationOpen),
//   });
  
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));