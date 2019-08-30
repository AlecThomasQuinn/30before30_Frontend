import React from 'react';

const HealthAndFitnessCard = (item) => {
    console.log(item, "is this an item")
        return (
            <>
                <div className ='bucketListItem'>
                    <div className='itemDetails' style={{borderBottom:"1px solid black"}}>
                        <h3>{item.item.item_name}</h3>
                        <p>{item.item.description}</p>
                        <p>{item.item.target_date}</p>
                    </div>
                </div>
            </>
        )
};

export default HealthAndFitnessCard;