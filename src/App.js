import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Body from './components/body';

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}

export default App;
