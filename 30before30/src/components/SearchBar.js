import React from 'react';

class SearchBar extends React.Component {

    searchValue = this.props.list.searchValue

    changeHandler = e => {
        this.setState({searchValue: e.target.value})
    }

    render(){
        console.log(this.props)
        return (
            <form>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Search Bucket List'
                    value={this.searchValue}
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