import styled from 'styled-components'

export const ImageWrapper = styled.div` 
    min-width: 100vw;
    height: 90vh;
    transition: .2.5s ease-in-out ;
    overflow: hidden;      
    
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;   
    background-image: linear-gradient(
      rgba(63, 19, 13, 0.908) ,
      rgba(63, 19, 13, 0.518) 
            ),
            url(${props=> props.imageUrl});    
    
    
    
    
`;

export const HeaderWrapper = styled.div` 
    min-width: 100vw;
    height: 10vh;
    position: absolute;
    top: 0%;
    left: 0%;
    
        
   
    
`;



export const TextAndButtonContainer = styled.div`
      position: absolute;
      top: 25%;
      left: 35%;      
      text-shadow: 1px 1px 1px black;
      color: blue;
      backface-visibility: hidden;
                             
                  h1{
                        font-weight:bold;
                        color: white;
                        text-align: start;
                        text-shadow: 1px 1px 1px rgba(21, 28, 58, 0.98) ;
                        animation: moveInFromRightt 10s ease-out infinite;
                        
                        
                  }

                  p{
                        font-size:20px;
                        color: white;
                        text-align: start;
                        animation: moveInFromLeftt 10s ease-out infinite; 
                        
                  }

                  button{
                  margin: 10px;                 
                  padding: 10px;
                  margin-left: -55%;
                  border-radius: 2px;
                  background: rgba(21, 28, 58, 0.78);
                  outline: none;
                  color: white;
                  border: rgba(21, 28, 58, 0.38);
                  cursor: pointer;
                  font-family: Yu Gothic UI;
                  animation: moveInFromRightt 10s ease-out infinite;
                  
                  
                  
                  }

      @media screen and (max-width: 800px) {   
            top: 20%;
            left: 13%;
            font-size: 13px;
                  button{
                        margin-left: -50%;
                  }
            
      }

      @media screen and (max-width: 420px) {   
            h1{                        
             font-size: 18px 
            }
                  
            p{
            font-size: 16px 
            }
      
      }

      @keyframes moveInFromRightt {
            20%  {
              opacity: 1;
              transform: translateX(20px);
            }            
            
          }

          @keyframes moveInFromLeftt {
            20%  {
              opacity: 1;
              transform: translateX(20px);
            }
            
          }
          
`;