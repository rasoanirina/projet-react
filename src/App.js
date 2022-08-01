import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
const App = () => {
  return (
    
    <Router>
    <Routes>
      <Route exact  path='/' element={<Home />}/>
      <Route exact  path='/competence' element={<Knowledges />}/>
      <Route exact  path='/portfolio' element={<Portfolio />}/>
      <Route exact  path='/contact' element={<Contacts />}/>
      <Route exact  element={<NotFound />}/>
    </Routes>
    
 </Router>
     
  );
};
export default App;
 