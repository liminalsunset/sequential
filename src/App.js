import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import data from './data.json';
import PoseList from './PoseList.js';
import PoseForm from './PoseForm.js';
import Reload from './Reload.js'

function App() {
  const [ poseList, setPoseList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = poseList.map(pose => {
      return pose.id === Number(id) ? { ...pose, complete: !pose.complete } : { ...pose};
    });
    setPoseList(mapped);
  }

  const handleFilter = () => {
    let filtered = poseList.filter(pose => {
      return !pose.complete;
    });
    setPoseList(filtered);
  }

  const addPose = (userInput) => {
    let copy = [...poseList];
    copy = [...copy, { id: Math.max(...poseList.map(pose => pose.id)) + 1, asana: userInput, complete: false }];
    setPoseList(copy);
  }

  return (
    <div className="App">
      <Header />
      <PoseList poseList={poseList} handleToggle={handleToggle} handleFilter={handleFilter} />
      <PoseForm addPose={addPose} />
      <Reload />
    </div>
  );
}

export default App;
