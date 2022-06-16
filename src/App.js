import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Reddit from './features/posts/Reddit';
//import Card from './components/Card/Card';
import SubredditsCard from './components/SubredditsCard/SubredditsCard';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <section className="posts">
          <Reddit />
        </section>
        <SubredditsCard />
      </div>
    </div>
  );
};
