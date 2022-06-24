import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Reddit from './features/posts/Reddit';
import Subreddits from './features/subreddits/Subreddits';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <section className="posts">
          <Reddit />
        </section>
        <Subreddits />
      </div>
    </div>
  );
};
