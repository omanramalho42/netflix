import React from 'react';

import { 
  BrowserRouter, 
  Routes as Router, 
  Route, 
  Link 
} from 'react-router-dom';

import { 
  Home, 
  Dashboard, 
  Movies
} from './screens';

const Routes:React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />}/>
        <Route path='movies' element={<Movies />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Router>
    </BrowserRouter>
  );
}

export default Routes;