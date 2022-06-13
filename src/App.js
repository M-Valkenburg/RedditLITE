import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="posts">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
