import React, { createContext } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

//importing Active & Achieved component's list
import ActiveItem from "../components/ActiveItem";
import AchievedItem from "../components/AchievedItem";

//exporting state from Context API
export const AppState = createContext();

class AppContext extends React.Component{
    constructor() {
        super();
    
        this.state = {
          bucketList: [],
          active: true,
          achieved: false,
          search: false
        };
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

      componentDidMount() {

        axiosWithAuth()
        .get('https://thirty-before-thirty-bw.herokuapp.com/api/user-items')
        .then(res => {
            // console.log('from componentDidMount', res)
            this.setState({
                bucketList: res.data
            })
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    render(){
        return (
            <AppState.Provider 
            value={{
                ...this.state, 
                activeTab: this.activeTab,
                achievedTab: this.achievedTab,
                renderBucketList: this.renderBucketList
            }}
            >
            {this.props.children}
            </AppState.Provider>
        );
    }
};

export default AppContext;