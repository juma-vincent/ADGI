import React from 'react';

import Header from '../../components/header/header';
import './goalOne.scss';





const GoalOne = () =>{

        

    return(
      <div className='contact-page-wrapper'>
          <Header/>          
  
          <h2 style={{fontSize: '29px'}}> Contact Us</h2>        
      
         <div>Hello this is the goal one page</div>

          
      
      </div>
    
  
    );
}

  

    


// const mapDispatchToProps = (dispatch) => ({
//     toggleContactSuccessOn: () =>
//       dispatch(toggleContactSuccessOn),
//   });

  

// export default connect(null, mapDispatchToProps)(ContactPage);
export default GoalOne;