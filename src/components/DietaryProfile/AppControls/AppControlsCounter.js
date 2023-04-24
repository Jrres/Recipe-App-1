import React from 'react'

const AppControlsCounter =({total}) =>{
    return(
        <div className='app_controls_counter'>
            <h2>
                Total Calories: <span>{total}</span>
            </h2>
        </div>
    );
};

export default AppControlsCounter;