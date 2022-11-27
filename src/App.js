import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.json';
import PoseList from './PoseList.js';

function App() {
  const [ poseList ] = useState(data)

  return (
    <div className="App">
      <Header />
      <PoseList poseList={poseList} />
    </div>
  );
}

export default App;
