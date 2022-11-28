import React from 'react';
import Pose from './Pose.js'

// container that holds all the poses

const PoseList = ({poseList, handleToggle, handleFilter}) => {
    return (
        <div>
            {poseList.map(pose => {
                return (
                    <Pose pose={pose} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed Poses</button>
        </div>
    );
};

export default PoseList;