import React from 'react';

const Reload = () => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <button onClick={refreshPage}>Reset Sequence</button>
        </div>
    );
}

export default Reload;