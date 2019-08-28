import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

//importing BucketListItem component
import BucketListItem from "./BucketListItem";

//importing NavigationTabs Component
import NavigationTabs from "./NavigationTabs";
import SettingsMenu from "./SettingsMenu";

class BucketList extends React.Component {
  render() {
    axiosWithAuth()
      .get("https://thirty-before-thirty-bw.herokuapp.com/api/user-items")
      .then(response => {
        console.log("get response", response);
      })
      .catch(err => console.log("error: ", err.response));
    return (
      <>
        <div id="App">
          <SettingsMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <div id="page-wrap"></div>
        </div>

        <div className="bucketListScene">
          <div className="BucketListHeader">
            <h1>Bucket List</h1>
            <div className="headerUtilities">
              <h5>Sort</h5>
              <h5>Search</h5>
            </div>
          </div>
          <div id="bucketListProgress">
            <p id="bucketListProgress">Progress: %0</p>
          </div>
          <div className="navTabs">
            <label id="activeTab">Active</label>
            <label id="achievedTab">Achieved</label>
          </div>
          <div className="bucketListBody">
            <BucketListItem />
            <div className="AddItemButton">
              <button>Add</button>
            </div>
          </div>
          <NavigationTabs />
        </div>
      </>
    );
  }
}

export default BucketList;
