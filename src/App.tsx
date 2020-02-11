import React from 'react';
import './App.css';
import Tree from './components/Tree';

const App = () => {
  return (
    <div className="App">
      <Tree name={`White birch`} scientificName={`Betula pendula`}/>
      <Tree name={`Weeping willow`} scientificName={`Salix sepulcralis`}/>
      <Tree name={`London planetree`} scientificName={`Platanus hybryda`}/>
    </div>
  );
}

export default App;
