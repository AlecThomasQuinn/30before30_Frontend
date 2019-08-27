import React from 'react';

class SearchBar extends React.Component {


    changeHandler = e => {
        this.setState({bucketList: e.target.value})
    }

    searchItem = e => {
        e.preventDefault()
        this.props.list.map(item => {
            if(item.name === e.target.value){
                return item;
            }else{
                return console.log('Item not found')
            }
        })
    }

    render(){
        console.log(this.props)
        return (
            <form>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Search Bucket List'
                    value={this.props.list.map(item => item.name)}
                    onChange={this.changeHandler}
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