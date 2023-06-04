import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Entrance from './pages/Entrance';
import Lab from './Components/Total/Lab';
import MainNavigation from './Components/Total/MainNavigation';
import Recordlib from './pages/Recordlib';

function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path='/' element={<Entrance/>}/>
        <Route path='/lab' element={<Lab/>}/>
        <Route path='/record' element={<Recordlib/>}/>
      </Routes>
    </div>
  );
}

export default App;
