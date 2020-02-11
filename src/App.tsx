import React from 'react';
import './App.css';
// import Tree from './components/Tree';
import PopularTrees from './components/PopularTrees';

const App = () => {
  return (
    <div className="App">
      {/* <Tree name={`White birch`} scientificName={`Betula pendula`}/>
      <Tree name={`Weeping willow`} scientificName={`Salix sepulcralis`}/>
      <Tree name={`London planetree`} scientificName={`Platanus hybryda`}/> */}
      <PopularTrees/>
    </div>
  );
}

export default App;
