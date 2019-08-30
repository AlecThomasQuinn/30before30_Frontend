import React from "react";
import { AppState } from "../contexts/AppContext";
import LearningCard from "./CategoriesCard/LearningCard";


const LearningComponent = () =>  (

    

        <AppState.Consumer>{(context)=>{
            const bucketlist = context;
            console.log(bucketlist,"testing");
                return (
        <div>
            <h1 className="learning-h1 animated bounce delay-2s">Learning</h1>
            <img className="learning-img" src="https://www.jisc.ac.uk/sites/default/files/styles/710px-wide/public/library-laptop-user.jpg?itok=XjSjwmvx" alt="picture of health and fitness"/>
            {bucketlist.bucketList.map(item => {
                if (item.category_name === "Learning"){
                    return <LearningCard item={item} key={item.id}/>;

                }
            
            })}
        </div>
                )
            }} 

        </AppState.Consumer>
)

export default LearningComponent