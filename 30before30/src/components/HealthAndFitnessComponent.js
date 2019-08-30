import React from "react";
import { AppState } from "../contexts/AppContext";
import HealthAndFitnessCard from "../components/CategoriesCard/HealthAndFitnessCard" ;

const HealthAndFitnessComponent = () =>  (

    

        <AppState.Consumer>{(context)=>{
            const bucketlist = context;
            console.log(bucketlist,"testing");
                return (
        <div>
            <h1 className="handf-h1 animated bounce delay-2s">Health And Fitness</h1>
            <img className="handf-img" src="https://images.unsplash.com/photo-1553531889-3836a7ee6d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="picture of health and fitness"/>
            {bucketlist.bucketList.map(item => {
                if (item.category_name === "Health & Fitness"){
                    return <HealthAndFitnessCard item={item} key={item.id}/>;

                }
            
            })}
        </div>
                )
            }} 

        </AppState.Consumer>
)

export default HealthAndFitnessComponent