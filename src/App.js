import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.json';
import PoseList from './PoseList.js';

function App() {
  const [ poseList, setPoseList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = poseList.map(pose => {
      return pose.id === Number(id) ? { ...pose, complete: !pose.complete } : { ...pose};
    });
    setPoseList(mapped);
  }

  return (
    <div className="App">
      <Header />
      <PoseList poseList={poseList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;
