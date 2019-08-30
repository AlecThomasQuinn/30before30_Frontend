import React from 'react';
import ActiveItem from './ActiveItem';

//importing AppState from Context API
import { AppState } from "../contexts/AppContext";

class SearchBar extends React.Component {

    //Fetching state with Context API
    static contextType = AppState;

    
    render(){

        //targeting state
        const {
            bucketList, 
            search, 
            changeHandler
        }= this.context;

        console.log('From SearchBar', bucketList)
        
        //Maps through the BucketList and returns each item individually
        bucketList.map((item)=> {
            return <ActiveItem item={item} key={item.id} />
        })

        //Filters through the bucketList and if it cannot find the item's name, it won't return it, if it does
        // bucketList.filter(
        //     (item) => {
        //         return item.name.indexOf(this.state.search) !== -1; 
        //     }
        // );

        // console.log('from SearchBar', this.props)
        return (
            <form>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Search Bucket List'
                    value={search}
                    onChange={changeHandler}
                />
                <button
                type='submit'
                onClick={this.searchItem}
                >Search</button>
            </form>
        )
    }
};

export default SearchBar;