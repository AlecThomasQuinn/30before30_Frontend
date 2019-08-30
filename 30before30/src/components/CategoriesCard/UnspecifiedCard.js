import React from 'react';

const UnspecifiedCard = (item) => {
    console.log(item, "is this an item")
        return (
            <>
                <div className ='bucketListItem'>
                    <div className='itemDetails' style={{border:"1px solid red"}}>
                        <h3>{item.item.item_name}</h3>
                        <p>{item.item.description}</p>
                        <p>{item.item.target_date}</p>
                    </div>
                </div>
            </>
        )
};

export default UnspecifiedCard;