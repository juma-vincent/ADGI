import React from 'react';

import Header from '../../components/header/header';
import './goal-three.scss';





const GoalThree = () =>{

        

    return(
      <div className='goal-three-page-wrapper'>
          <Header/>          
            <div className='goal-three-page-content'>
                
                <div className='goal-three-banner-section'>
                    <h2>2027 Goal No. 3: Infrastructure</h2>        
                    
                    <div>
                        The extent of infrastructure problems in Africa varies widely across the continent and can be 
                        assessed through various metrics, including access to electricity, roads, clean water, and internet connectivity. 
                    
                        <br />
                        To provide a comparative perspective, let's examine the extent of infrastructure problems in two African countries:
                        Democratic Republic of the Congo and South Sudan.
                    </div>

                </div>

                <div className='drc-south-sudan-wrapper'>
                    <span className='drc-wrapper'>
                        <h2>Democratic Republic of Congo (DRC):</h2>

                        Infrastructure in the DRC faces significant challenges, largely due to decades of conflict, political instability, and underinvestment.
                        According to the World Bank, only about 15% of the population has access to electricity, and road networks are poorly developed, hindering trade and access to essential services.
                        The DRC's water and sanitation infrastructure is also inadequate, with only around 46% of the urban population having access to improved sanitation facilities.
                        Overall, infrastructure deficiencies in the DRC severely constrain economic growth and human development, with an estimated percentage of infrastructure inadequacy hovering around 70-80%.
                    
                    </span>

                    <span className='south-sudan-wrapper'>
                        <h2> South Sudan:</h2>
                        South Sudan, the youngest country in Africa, faces substantial infrastructure challenges exacerbated 
                        by years of conflict and economic instability. The country has limited road networks, making transportation
                        difficult, particularly during the rainy season when many roads become impassable. Access to electricity is 
                        extremely low, with less than 10% of the population having access to grid electricity. Many rely on traditional 
                        energy sources such as firewood and charcoal. Water and sanitation infrastructure in South Sudan is also insufficient, 
                        with only about 11% of the population having access to improved sanitation facilities. The percentage of infrastructure 
                        inadequacy in South Sudan is estimated to be around 60-70%.
                    </span>

                </div>

                <div className='drc-south-sudan-conclusion'>
                        Overall, both the Democratic Republic of the Congo and South Sudan face significant infrastructure challenges, 
                        with limited access to essential services such as electricity, clean water, and transportation networks.  
                        Poor infrastructure in countries like South Sudan and the Democratic Republic of Congo (DRC) severely impedes 
                        economic growth in several ways.
                </div>

                <div className='goal-three-economic-impact'>
                    
                    <div> 
                        <h2>Impact on Economic Growth</h2>

                        <b>Hindered Trade and Commerce: </b>Inadequate transportation infrastructure, including roads, railways, and ports, limits the movement of goods and services. This restricts 
                        trade opportunities both domestically and internationally, hampering economic growth potential.
                        <br />

                        <b>Reduced Investment Attraction:</b> 
                        Poor infrastructure deters foreign and domestic investment. Investors are less likely to commit to projects in countries where basic infrastructure, 
                        such as reliable electricity and transportation networks, is lacking. This leads to a slowdown in economic development and job creation.
                        <br />

                        <b>High Transaction Costs:</b>
                        Insufficient infrastructure increases transaction costs for businesses. Delays in transportation, unreliable power supply, and inefficient logistics raise 
                        operating expenses, reducing competitiveness and profitability.
                        <br />


                        <b>Limited Access to Services:</b>
                        Inadequate infrastructure, particularly in remote and rural areas, limits access to essential services such as healthcare, education, and clean water. 
                        This hinders human capital development and productivity, further constraining economic growth.
                        <br />

                        <b>Vulnerability to Shocks: </b>
                        Fragile infrastructure systems are more susceptible to natural disasters and other shocks. In countries like South Sudan and the 
                        DRC, where infrastructure is often poorly maintained or non-existent, disruptions from events like floods or conflicts can have devastating effects on livelihoods and 
                        economic activities.

                        <br />
                        <br />
                        To address infrastructure problems in Africa, ADGI intends to undertake the following actions:

                        <br />
                        <br />
                        <b>Collaborating with Governments: </b>
                        ADGI seeks to work closely with local governments to identify priority infrastructure projects and advocate for their implementation. By 
                        collaborating with government agencies, ADGI can leverage resources and expertise to address infrastructure deficits effectively.

                        <br />
                        <b>Mobilizing Resources: </b>
                        ADGI aims to mobilize funding and resources from international donors, philanthropic organizations, and private sector partners to support infrastructure 
                        development initiatives. This may involve establishing partnerships and fundraising campaigns to finance critical projects.

                        <br />
                        <b> Implementing Community-Led Projects: </b>
                        ADGI aspires to empower local communities to take ownership of infrastructure projects through participatory approaches. 
                        By involving communities in planning, decision-making, and implementation, ADGI can ensure that projects are tailored to meet local needs and priorities.

                        <br />
                        <b>Promoting Innovation and Technology: </b>
                        ADGI seeks to promote the use of innovative technologies and sustainable practices in infrastructure development. 
                        This may include promoting renewable energy solutions, green infrastructure, and digital technologies to enhance efficiency and resilience.

                        <br />
                        <b>Capacity Building and Training: </b>
                        ADGI aims to provide capacity building and training programs to local stakeholders, including government officials, 
                        community leaders, and technical professionals. By enhancing skills and knowledge in infrastructure planning, management, and maintenance, ADGI can strengthen 
                        local capacity to address infrastructure challenges effectively.
                    </div>

                </div>

                <div className='goal-three-conclusion'>
                        By employing these approaches, ADGI can contribute to addressing infrastructure challenges in Africa, ultimately fostering economic growth, 
                        improving living standards, and enhancing the well-being of the population.

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
export default GoalThree;