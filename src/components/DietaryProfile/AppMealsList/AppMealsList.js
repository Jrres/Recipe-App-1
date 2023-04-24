import React from 'react'

const AppMealsList =({meals, deleteMealHandler}) =>{
    //meals needs a ?
    return(
        <div className='app_meals_container_wrapper'>
            {meals?.map((meal, index)=>(
                <div key={index} className='app_meals_container_wrapper_inner'>
                    <div>{`${meal.mealName} : ${meal.calories}`}</div>
                    <div>
                        <button className='btn_delete_meal' onClick={()=>deleteMealHandler(meal.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppMealsList;