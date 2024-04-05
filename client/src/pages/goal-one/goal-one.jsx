import React from 'react';

import Header from '../../components/header/header';
import './goal-one.scss';





const GoalOne = () =>{

        

    return(
      <div className='goal-one-page-wrapper'>
          <Header/>          
            <div className='goal-one-page-content'>
                <h2 style={{fontSize: '29px'}}>2025 Goal No. 1: Food Security For All</h2>        
            
                <div>The prevalence of food insecurity in Africa varies across regions and countries.
                It's a complex issue influenced by factors like climate, economic conditions, conflict, 
                and governance. According to data from the Food and Agriculture Organization (FAO), as of 
                recent years, around 20% of the population in sub-Saharan Africa is estimated to be 
                undernourished, indicating a significant level of food insecurity. However, the prevalence 
                can be higher in certain areas or during periods of drought, conflict, or economic instability.
                <br />
                Let's compare Nigeria and Ethiopia, two populous countries in Africa, in terms of the percentages
                of their populations vulnerable to food insecurity.
                </div>

        <div className='nigeria-ethiopia-wrapper'>
            <span className='nigeria-wrapper'>
                <h2>Nigeria</h2>
                Nigeria has a population of over 223 million people, making it the most populous country 
                in Africa. According to recent data, around 26.9% of the population in Nigeria is estimated to be 
                undernourished or vulnerable to food insecurity. Factors contributing to food insecurity in Nigeria 
                include rapid population growth, inadequate infrastructure, climate variability, and conflicts in 
                certain regions like the Northeast.
            
            </span>

            <span className='ethiopia-wrapper'>
                <h2>Ethiopia</h2>
                Ethiopia is the second-most populous country in Africa, with a population of over 126 million 
                people. Approximately 21.8% of the population in Ethiopia is considered undernourished or 
                vulnerable to food insecurity. Food insecurity in Ethiopia is influenced by factors such as 
                recurrent droughts, limited access to markets in rural areas, land degradation, and periodic 
                conflicts.
            </span>
        </div>

        <div>
            Both Nigeria and Ethiopia face significant challenges in ensuring food security for their 
            populations. While Nigeria has a higher percentage of its population vulnerable to food insecurity,
            Ethiopia also grapples with substantial issues in this regard.
        </div>

        <div>
        Vulnerability to food insecurity in Africa adversely affects both individuals and economic growth:
        <br />
        <h2>Impact on Individuals:</h2>

        <b>Malnutrition:</b>Lack of access to nutritious food leads to malnutrition, stunting physical and 
        cognitive development,  particularly in children.
        <br />

        <b>Health Issues:</b> 
        Food insecurity contributes to a higher prevalence of diseases and health complications, weakening 
        immune systems and increasing susceptibility to illnesses.
        <br />

        <b>Poverty Traps:</b>
        Food insecurity perpetuates cycles of poverty as families struggle to meet basic 
        nutritional needs, hindering opportunities for education and employment.
        <br />


        <h2>Impact on Economic Growth:</h2>
        <b>Productivity Loss:</b>
        Malnutrition and poor health resulting from food insecurity 
        reduce productivity in the workforce, lowering overall economic output.
        </div>

        <b>Increased Healthcare Costs:</b>
        Higher prevalence of diseases due to food insecurity leads to increased 
        healthcare spending, diverting resources from productive investments.

        <b>Social Instability:</b>
        Food insecurity can exacerbate social tensions and conflicts, 
        disrupting economic activities and deterring investment.


        <div>
        To address food insecurity in Africa, ADGI intends to undertake the following actions:

        <b>Invest in Agriculture:</b>
        Support smallholder farmers with access to inputs, technology, and 
        training to improve productivity and resilience to climate shocks.

        
        <b>Infrastructure Development:</b>
        Build roads, storage facilities, and market networks to 
        enhance access to markets, reduce food waste, and stabilize prices.

        <b> Social Safety Nets:</b>
        Implement targeted food assistance programs, cash transfers, and 
        nutrition interventions to support vulnerable populations during crises.

        <b> Diversify Food Systems:</b>
        Promote crop diversification, sustainable farming practices, 
        and agroecology to enhance dietary diversity and resilience to climate change.

        <b> Conflict Resolution:</b>
        Address conflicts and promote peace-building efforts to 
        stabilize regions affected by violence, which disrupt food production and distribution.

        <b> Education and Empowerment:</b>
        Improve education and women's empowerment to enhance food security 
        through better nutrition, family planning, and income generation opportunities.

        <b> Partnerships and Governance:</b>
        Foster collaboration among governments, NGOs, private sector, and international organizations to 
        coordinate efforts, strengthen institutions, and ensure accountable governance.

        <br />
        By implementing these strategies, ADGI can help Africa make significant strides towards achieving food 
        security and promoting sustainable development.

        </div>

        <div>
        By the year 2025, ADGI aims to reduce by half the estimated 20% of the sub-Saharan population currently 
        considered undernourished.

        <br />
        ADGI also plans to address food insecurity in Africa by investing in agriculture, developing 
        infrastructure, implementing social safety nets, diversifying food systems, resolving conflicts, 
        empowering communities through education, and fostering partnerships for effective governance.
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
export default GoalOne;