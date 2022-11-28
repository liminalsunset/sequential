import React from 'react';

//single pose in sequence

const Pose = ({pose, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={pose.id} key={pose.id + pose.asana} name ='pose' value={pose.id} onClick={handleClick} className={pose.complete ? 'pose strike' : 'pose'}>
            {pose.asana}
        </div>
    );
};

export default Pose;