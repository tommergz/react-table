import React from 'react';
import './App.css';
import FixedSizeGrid from './components/grid'

function App() {
  return (
    <div className="App">
      <FixedSizeGrid columns={8} rows={1000} />
    </div>
  );
}

export default App;
