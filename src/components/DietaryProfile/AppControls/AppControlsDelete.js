import React from 'react'

const AppControlsDelete =({deleteAllMeals}) =>{
    return(
        <div className='app_controls_delete'>
            <button className='btn_delete_all' onClick={()=>deleteAllMeals()}>Delete All</button>
        </div>
    );
};

export default AppControlsDelete;