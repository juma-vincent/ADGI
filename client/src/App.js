import './App.css';
import Homepage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import { Route, Routes } from 'react-router-dom'; 

//Switch is not supported in the currenct react-router-dom version. It has been replaced with Routes

import ContactPage from './pages/contact-page/contact-page';
import SuccessMessageModal from './components/modals/success-message-modal';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route exact path='/' element={ <Homepage/>} />
        <Route exact path='/contact' element={<ContactPage />}/>
      </Routes>
      <Footer/>

      <SuccessMessageModal />

    </div>
  );
}

export default App;
