import React from 'react';
import ActiveItem from './ActiveItem';

class SearchBar extends React.Component {

    state = {
        search: ''
    }

    bucketList = this.props.list.bucketlist;
    
    changeHandler = e => {
        this.setState({search: e.target.value})
    }
    
    render(){
        
        let filterItems = this.bucketList;
        
        //Maps through the BucketList and returns each item individually
        filterItems.map((item)=> {
            return <ActiveItem item={item} key={item.id} />
        })

        //Filters through the bucketList and if it cannot find the item's name, it won't return it, if it does
        filterItems.filter(
            (item) => {
                return item.name.indexOf(this.state.search) !== -1; 
            }
        );

        // console.log('from SearchBar', this.props)
        return (
            <form>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Search Bucket List'
                    value={this.state.search}
                    onChange={this.changeHandler.bind(this)}
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