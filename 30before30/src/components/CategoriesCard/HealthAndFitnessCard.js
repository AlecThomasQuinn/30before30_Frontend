import React from 'react';
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const HealthAndFitnessCard = (item) => {
    console.log(item, "is this an item")
        return (
            <>
                <div className="health-and-fitness-card">
                    <Card>
                        <div className ='bucketListItem'>
                            <div className='itemDetails' style={{borderBottom:"1px solid black"}}>
                                <h3>{item.item.item_name}</h3>
                                <p>{item.item.description}</p>
                                <p>{item.item.target_date}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </>
                )
};

export default HealthAndFitnessCard;