import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    console.log("state", this.state.credentials);
    axios
      .post(
        "https://thirty-before-thirty-bw.herokuapp.com/auth/login",
        this.state.credentials
      )
      .then(response => {
        console.log("response value: ", response);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/bucket-list");
      })
      .catch(err => console.log("error: ", err.response));
  };

  render() {
    return (
      <div className="Login">
        <h1>Welcome!</h1>
        <h3>Please login</h3>
        <div>
          <form onSubmit={this.login}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button type="submit">Log in</button>
          </form>
          {/* <button onClick={() => localStorage.clear()}>Log Out</button> */}
        </div>
      </div>
    );
  }
}

export default Login;
