import React from "react";
import { AppState } from "../contexts/AppContext";
import UnspecifiedCard from "./CategoriesCard/UnspecifiedCard";


const UnspecifiedComponent = () =>  (

    

        <AppState.Consumer>{(context)=>{
            const bucketlist = context;
            console.log(bucketlist,"testing");
                return (
        <div>
            <h1 className="unspecified-h1 animated bounce delay-2s">Unspecified</h1>
            <img className="unspecified-img" src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80" alt="picture of health and fitness"/>
            {bucketlist.bucketList.map(item => {
                if (item.category_name === "Unspecified"){
                    return <UnspecifiedCard item={item} key={item.id}/>;

                }
            
            })}
        </div>
                )
            }} 

        </AppState.Consumer>
)

export default UnspecifiedComponent