import Listing from './components/Listing';
import React from 'react';
import data from './data/etsy.tsx';
import "./App.css";



function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}

export default App;