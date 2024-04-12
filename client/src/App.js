import './App.css';
import Homepage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom'; 

//Switch is not supported in the currenct react-router-dom version. It has been replaced with Routes

import ContactPage from './pages/contact-page/contact-page';
import DonationPage from './pages/donation-page/donation-page';
import ContactSuccessModal from './components/modals/contact-success-modal/contact-success-modal';
import DonationSuccessModal from './components/modals/donation-success-modal/donation-success-modal';
import GoalOne from './pages/goal-one/goal-one';
import GoalTwo from './pages/goal-two/goal-two';
import GoalThree from './pages/goal-three/goal-three';
import GoalFour from './pages/goal-four/goal-four';



function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={ <Homepage/>} />
          <Route path='/goal-one' element={<GoalOne />}/>
          <Route path='/goal-two' element={<GoalTwo />}/>
          <Route path='/goal-three' element={<GoalThree />}/>
          <Route path='/goal-four' element={<GoalFour />}/>
          {/* <Route path='/donation' element={<DonationPage />}/> */}
        </Routes>
        <Footer/>
        <ContactSuccessModal />
        <DonationSuccessModal />
      </div>
    
  );
}

export default App;
