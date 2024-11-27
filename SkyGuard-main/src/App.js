
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
//import LoginSignupPage from './Pages/LoginSignupPage';
import Detect from './Pages/Detect';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/detect' element={<Detect/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
