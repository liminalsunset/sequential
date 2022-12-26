import React from 'react';

const Reload = () => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
            <button class='button' style={{margin: '20px'}} onClick={refreshPage}>Reset Sequence</button>
        </div>
    );
}

export default Reload;