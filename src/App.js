import React from 'react';
import TinderCard from 'react-tinder-card';
import './App.css';
import Header from './Header';
import SwipedButtons from './SwipedButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      
      <Header/>
      <TinderCards/>
      <SwipedButtons/>
    </div>
  );
}

export default App;
