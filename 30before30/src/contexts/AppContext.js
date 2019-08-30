import React, { createContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

//importing Active & Achieved component's list
import ActiveItem from "../components/ActiveItem";
import AchievedItem from "../components/AchievedItem";

//importing SearchBar Component
import SearchBar from '../components/SearchBar';

//exporting state from Context API
export const AppState = createContext();

class AppContext extends React.Component{
    constructor() {
        super();
    
        this.state = {
          bucketList: [],
          active: true,
          achieved: false,
          search: false,
          searchValue: ''
        };
    }

    
    //Keeps track for search in BucketList
    changeHandler = e => {
        this.setState({searchValue: e.target.value})
    }

    //checks if active tab is true, and displays it
    activeTab = () => {
            if (this.state.active === false) {
                this.setState({ active: !this.state.active, achieved: !this.state.achieved });
            } else if (this.state.active === true) {
                return this.context;
            }
        };
        //checks if achieved tab is true, and displays it
        achievedTab = () => {
            if (this.state.achieved === false) {
            this.setState({ active: !this.state.active, achieved: !this.state.achieved });
        } else if (this.state.achieved === false) {
            return this.context;
        }
    };

    //Renders the active component upon click
    renderBucketList = () => {
        if (this.state.active === true) {
                return this.state.bucketList.map(item => (
                    <ActiveItem item={item} key={item.id} />
                ));
            } else {
                return this.state.bucketList.map(item => (
                    <AchievedItem item={item} key={item.id} />
                    ));
                }
        };
        
        //toggle search bar on/off
        toggleSearch = () => {
            if (this.state.search === false) {
                this.setState({ search: !this.state.search });
            } else if (this.state.search === true) {
                this.setState({ search: !this.state.search });
            }
        };
        
        componentDidMount() {
        axiosWithAuth()
        .get('https://thirty-before-thirty-bw.herokuapp.com/api/user-items')
        .then(res => {
            console.log('from componentDidMount', res)
            this.setState({
                bucketList: res.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    }
    
    removeItem = id => {
        
    }

    // deleteItem = () => {
    //     axiosWithAuth()
    //     const itemToDelete = this.state.bucketList.map(item => item.id)
    //     .delete(`https://thirty-before-thirty-bw.herokuapp.com/api/user-items/${itemToDelete}`,itemToDelete)
    //     .then(res => {console.log('From delete request',res)
    //     this.removeItem(itemToDelete)
    // })
    //     .catch( res => console.log(res))
    // }
    
    render(){

        console.log(this)
        return (
            <AppState.Provider 
            value={{
                ...this.state, 
                activeTab: this.activeTab,
                achievedTab: this.achievedTab,
                renderBucketList: this.renderBucketList,
                toggleSearch: this.toggleSearch,
                changeHandler: this.changeHandler,
                removeItem: this.removeItem
            }}
            >
            {this.props.children}
            </AppState.Provider>
        );
    }
};

export default AppContext;