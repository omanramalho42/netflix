import React from 'react';

import { 
  BrowserRouter, 
  Routes as Router, 
  Route, 
  Link 
} from 'react-router-dom';

import { 
  Home, 
  Dashboard 
} from './screens';

const Routes:React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Router>
    </BrowserRouter>
  );
}

export default Routes;