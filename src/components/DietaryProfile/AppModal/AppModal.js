import React from 'react'

const AppModal =({setOpenModal}) =>{
    
    return(
        <div className='app_modal'>
            <h3>Calories Must be Bigger Than 0 And Meal Name Cannot be Blank</h3>
            <button className='btn_close_modal' onClick={()=>setOpenModal(false)}>Close</button>
            
        </div>
    );
};

export default AppModal;