// import React from "react";
// import "./header.scss";
// import { Link } from "react-router-dom";
// // import { connect } from "react-redux";

// import Option from "../option/option";
// import CustomLink from "../custom-link/custom-link";

// // import MenuIcon from "../menu-icon/menu-icon";
// // import { ReactComponent as DownArrow} from '../../assets/icons/down-arrow11.svg';

// // import { toggleNavigationOpen } from "../../redux/modals/modal-actions";
// // import DropDownMenu from "../drop-down-menu/drop-down-menu";
// // import CartIcon from "../cart-icon/cart-icon";
// // import CartDropdown from "../cart-dropdown/cart-dropdown";
// import { useLocation } from "react-router-dom";



import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import Option from "../option/option";
import { useLocation } from 'react-router-dom';
import CustomLink from '../custom-link/custom-link';



const Header = () => {
  const location = useLocation();

  return ( 
    <div className="header">

      <Link to="/" className="logo-container">
        <img src="/images/logo-black.png" alt="" className="logo" />      
        
      </Link>

      <div className="right-side-section">

        <div className='upper-division'>

          <div className= "options" >

            <Link to="/" >
            <Option text='Home'/>
            </Link>   
            
            <Link to="/contact" >
              <Option text='Contact'/>
            </Link> 
                    
                    
            {location.pathname == '/'?
            (<>
          
            <CustomLink text='about'  >
            <Option text='About'/>
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

// const mapStateToProps = state =>({
//   cartIsOpen: state.cart.cartIsOpen
// });

// const mapDispatchToProps = (dispatch) => ({
//     toggleNavigationOpen: () => dispatch(toggleNavigationOpen),
//   });
  
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));


 
export default Header;
