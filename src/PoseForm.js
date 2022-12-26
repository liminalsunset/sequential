import React, { useState } from 'react';
import './Pose.css';

const PoseForm = ({ addPose }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPose(userInput);
        setUserInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type='text' onChange={handleChange} placeholder='Next pose...' />
            <button class='button' style={{margin: '10px'}}>Add Pose</button>
        </form>
    );
};

export default PoseForm;