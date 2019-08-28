import React from "react";
import { Button } from "semantic-ui-react";
import BurgerMenu from "./SettingsMenu";

class Settings extends React.Component {
  ButtonExampleEmphasis = () => (
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );

  render() {
    return (
      <div className="Settings">
        <BurgerMenu />
        <div className="user-settings">
          <h1>User Settings</h1>
          <p>Mobile Notifications</p>
          <p>Email Notifications</p>
          <p>Sounds</p>
        </div>
        <div> {this.ButtonExampleEmphasis} </div>
      </div>
    );
  }
}

export default Settings;
