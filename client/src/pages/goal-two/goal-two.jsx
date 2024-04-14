import React from 'react';

import Header from '../../components/header/header';
import './goal-two.scss';




const GoalTwo = () =>{

        

    return(
      <div className='goal-two-page-wrapper'>
          <Header/>          
            <div className='goal-two-page-content'>
                        
            
                <div className='goal-two-banner-section'>
                        <h2>2025 Goal No. 2 : Health</h2>

                        <div>
                        Health and health infrastructure issues represent significant challenges throughout Africa, 
                        arising from various factors such as restricted access to healthcare services, insufficient 
                        funding, inadequate infrastructure, and political instability. Although quantifying these 
                        issues precisely is challenging, we can examine common challenges encountered by African 
                        nations and compare the scope of these challenges in Nigeria and the Democratic Republic 
                        of Congo (DRC)
                            
                        </div>
                </div>

                <div className='nigeria-drc-wrapper'>
                    <span className='nigeria-wrapper'>
                        <h2>Nigeria</h2>
                        Nigeria, being one of the most populous countries in Africa, faces numerous health challenges. 
                        According to the World Health Organization (WHO), Nigeria has a high maternal mortality ratio, 
                        with an estimated 814 deaths per 100,000 live births. Additionally, the country struggles with 
                        high infant mortality, with 74.2 deaths per 1,000 live births. Only about 3% of Nigeria's Gross 
                        Domestic Product (GDP) is allocated to healthcare, which is significantly below the recommended 15% 
                        by the Abuja Declaration. Access to healthcare services is a major issue, particularly in rural 
                        areas where infrastructure is poor, and there is a shortage of healthcare professionals. Many 
                        Nigerians rely on traditional healers due to the limited availability and affordability of modern 
                        healthcare services.

                    
                    </span>

                    <span className='drc-wrapper'>
                        <h2>Democratic Republic of Congo</h2>
                        The Democratic Republic of Congo faces similar health challenges exacerbated by decades of conflict, 
                        political instability, and underinvestment in healthcare infrastructure. The country has one of the 
                        highest maternal mortality rates globally, with an estimated 846 deaths per 100,000 live births. The 
                        infant mortality rate is also high at 66.9 deaths per 1,000 live births.
                        Healthcare infrastructure in the DRC is particularly weak, with a shortage of hospitals, clinics, and 
                        healthcare workers, especially in rural areas. Access to essential medicines and medical supplies is 
                        often limited, contributing to preventable deaths from treatable conditions such as malaria, HIV/AIDS, 
                        and malnutrition.

                    </span>

                    
                </div>

                <div className='nigeria-drc-conclusion'>
                        While the specific numbers may vary, both Nigeria and the DRC face significant health 
                        challenges, particularly concerning maternal and infant mortality rates. These challenges 
                        are further compounded by inadequate healthcare infrastructure, limited access to essential 
                        services, and insufficient investment in the health sector.
                    
                </div>

                

                

                <div className='goal-two-economic-impact'>   
                    <div>                  

                        <h2>Impact on Economic Growth: </h2>

                        <b>Reduced productivity: </b>
                        Illness and inadequate healthcare lead to decreased 
                        workforce productivity, affecting economic output.
                        <br />

                        <b>Increased healthcare spending: </b>
                        Governments and individuals spend more on treating 
                        preventable diseases, diverting resources from other sectors.
                        <br />  

                        <b>Brain drain: </b>
                        Healthcare professionals often emigrate due to poor working conditions, 
                        exacerbating shortages and weakening healthcare systems.

                        <b>Loss of human capital: </b>
                        Premature deaths and disabilities due to healthcare issues diminish human capital, 
                        limiting economic potential.
                          

                        <br />  
                        <br />
                        ADGI aims to play a vital role in addressing health challenges in Africa in the following ways:


                        <br />  
                        <br />
                        <b>Health Infrastructure Enhancement: </b>
                        ADGI aims to build and upgrade healthcare infrastructure across underserved regions, 
                        including the construction of hospitals, clinics, and health centers, ensuring equitable 
                        access to quality healthcare services.


                        <br />  
                        <b>Capacity Building and Training: </b>
                        ADGI seeks to invest in comprehensive training programs for healthcare professionals, 
                        empowering them with the skills and knowledge necessary to deliver effective healthcare 
                        services, thereby improving health outcomes in local communities.


                        <br />  
                        <b>Advocacy for Policy Change: </b>
                        ADGI endeavors to engage in advocacy efforts to influence policy decisions, advocating for 
                        increased government funding and prioritization of healthcare initiatives, ultimately fostering 
                        sustainable improvements in healthcare delivery and public health outcomes.

                        <br />  
                        <b>Health Education and Awareness: </b>
                        ADGI seeks to launch health education campaigns to raise awareness about important health issues, 
                        preventive measures, and the importance of seeking timely medical care. These campaigns can be conducted 
                        through various channels, including community meetings, radio broadcasts, and mobile outreach programs.



                        <br />
                        <br />
                        By implementing these strategies, ADGI can help Africa make significant strides towards achieving food 
                        security and promoting sustainable development.

                    </div>  

                </div>

                <div className='goal-one-conclusion'>
                    <br />
                    <br />
                    By focusing on these pragmatic approaches, ADGI aspires to make meaningful contributions to addressing health 
                    challenges in Africa, ultimately improving health outcomes and quality of life for millions of people across 
                    the continent.
                </div>
        
    
            </div>
          
        </div>
    
  
    );
}

  

    
 

// const mapDispatchToProps = (dispatch) => ({
//     toggleContactSuccessOn: () =>
//       dispatch(toggleContactSuccessOn),
//   });

  

// export default connect(null, mapDispatchToProps)(ContactPage);
export default GoalTwo;