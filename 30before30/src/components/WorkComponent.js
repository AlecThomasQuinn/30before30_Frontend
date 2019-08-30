import React from "react";
import { AppState } from "../contexts/AppContext";
import WorkCard from "./CategoriesCard/WorkCard";

const WorkComponent = () =>  (

    

        <AppState.Consumer>{(context)=>{
            const bucketlist = context;
            console.log(bucketlist,"testing");
                return (
        <div>
            <h1 className="work-h1 animated bounce delay-2s">Health And Fitness</h1>
            <img className="work-img" src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80" alt="picture of health and fitness"/>
            {bucketlist.bucketList.map(item => {
                if (item.category_name === "Work"){
                    return <WorkCard item={item} key={item.id}/>;

                }
            
            })}
        </div>
                )
            }} 

        </AppState.Consumer>
)

export default WorkComponent