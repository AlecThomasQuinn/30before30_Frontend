import React from "react";
import { AppState } from "../contexts/AppContext";
import LoveCard from "./CategoriesCard/LoveCard";


const LoveComponent = () =>  (

    

        <AppState.Consumer>{(context)=>{
            const bucketlist = context;
            console.log(bucketlist,"testing");
                return (
        <div>
            <h1 className="love-h1 animated bounce delay-2s">Love</h1>
            <img className="love-img" src="https://images.unsplash.com/photo-1553531889-3836a7ee6d3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="picture of health and fitness"/>
            {bucketlist.bucketList.map(item => {
                if (item.category_name === "Love"){
                    return <LoveCard item={item} key={item.id}/>;

                }
            
            })}
        </div>
                )
            }} 

        </AppState.Consumer>
)

export default LoveComponent