import React from 'react'

const AppMealsFilter =({setSelectedFilter, selectedFilter}) =>{
    return(
        <div className='app_meals_container_select'>
        <select defaultValue={selectedFilter} onChange={(e)=> setSelectedFilter(e.target.value)}>
            <option value=""></option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
        </select>
        </div>
    );
};

export default AppMealsFilter;