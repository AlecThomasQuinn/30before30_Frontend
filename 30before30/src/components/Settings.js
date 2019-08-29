import React from "react";
import { Button } from "semantic-ui-react";
import BurgerMenu from "./SettingsMenu";

class Settings extends React.Component {
  render() {
    return (
      <>
        <BurgerMenu />
        <div className="settingsapp">
          <h1 className="settingheader">User Settings</h1>
          <p className="settingtags">Mobile Notifications</p>
          <p className="settingtags">Email Notifications</p>
          <p className="settingtags">Sounds</p>
        </div>
      </>
    );
  }
}

export default Settings;
