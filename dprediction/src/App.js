import './App.css';
import Homepage from './components/homepage/homepage';
import Loginpage from './components/loginpage/loginpage';
import Registerpage from './components/registerpage/registerpage';
import { BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';
import { useState } from 'react';
import Profile from './components/profilepage/Profile';
import Contact from './components/contact/Contact';
import Help from './components/help/Help';
import Diabetics from './components/machine_learning_model/Diabetics'
import HeartPrediction from './components/machine_learning_model/HeartPrediction';

function App() {

  const [user,setLoginUser] = useState({})

  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ="/" element=
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Loginpage setLoginUser={setLoginUser}/>
            }
            />
          <Route path ="/login" element={<Loginpage setLoginUser={setLoginUser} />}>
            </Route>
          <Route path ="/register" element={<Registerpage/>}/>
          <Route path ="/profile" element={<Profile/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/help" element={<Help/>}/>
          <Route path ="/diabetics" element={<Diabetics/>}/>
          <Route path ="/heart" element={<HeartPrediction/>}/>

        </Routes>
      </Router>
    </div>
    // <Diabetics/>
    
  );
}

export default App;
