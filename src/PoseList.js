import React from 'react';
import Pose from './Pose.js'

// container that holds all the poses

const PoseList = ({poseList, handleToggle}) => {
    return (
        <div>
            {poseList.map(pose => {
                return (
                    <Pose pose={pose} handleToggle={handleToggle} />
                )
            })}
        </div>
    );
};

export default PoseList;