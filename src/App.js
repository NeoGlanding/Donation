import React, {useState} from 'react'
import AOS from 'aos'

import Navbar from './components/Navigation Bar/NavigationBar';
import Header from './components/Header/Header';
import AboutUs from './components/About Us/AboutUs';
import Form from './components/Form/Form';
import SuccessPage from './components/Success/SuccessPage';

function App() {

  const [success, setIsSuccess] = useState(false)


  React.useEffect(() => {
    AOS.init()
  }, [])

  return (
    <React.Fragment>
      {
        !success ?
          <React.Fragment>
            <Navbar />
            <Header />
            <AboutUs />
            <Form setIsSuccess={setIsSuccess}/>
          </React.Fragment>
          :
          <SuccessPage />
      }
    </React.Fragment>
  );
}

export default App;
