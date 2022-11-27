import React from 'react';
import Pose from './Pose.js'

// container that holds all the poses

const PoseList = ({poseList}) => {
    return (
        <div>
            {poseList.map(pose => {
                return (
                    <Pose pose={pose} />
                )
            })}
        </div>
    );
};

export default PoseList;