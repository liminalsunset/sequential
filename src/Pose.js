import React from 'react';

//single pose in sequence

const Pose = ({pose}) => {
    return (
        <div className={pose.complete ? 'strike' : ''}>
            {pose.asana}
        </div>
    );
};

export default Pose;