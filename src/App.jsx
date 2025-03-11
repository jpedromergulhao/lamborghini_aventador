import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import DiscExc from './Pages/DiscExc';
import Legacy from './Pages/Legacy/Legacy';
import Connect from './Pages/Connect';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home/>}/>
            <Route path='/discoverExcellence' element={<DiscExc />}/>
            <Route path='/legacy' element={<Legacy />}/>
            <Route path='/conncet' element={<Connect />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
