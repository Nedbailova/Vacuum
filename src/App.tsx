import React from 'react';
import './App.css';
import Header from '../src/components/Structure/Header';
import Sidebar from '../src/components/Structure/Sidebar';
import Main from '../src/components/Structure/Main';
import {BrowserRouter, Navigate, Routes, Route, Link } from 'react-router-dom';
import Page1 from '../src/pages/Page1';
import Page2 from '../src/pages/Page2';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Main>
      <Routes>
        {/* нужно сделать эту страницу индексной */}
        <Route path = "/page1" element = {<Page1 />}/>
        <Route path = "/page2" element = {<Page2 />}/>
      </Routes>
      </Main>
    </div>
  );
}

export default App;
