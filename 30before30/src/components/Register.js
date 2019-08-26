import React from "react";
import axios from "axios";

class Register extends React.Component {
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
        "https://thirty-before-thirty-bw.herokuapp.com/auth/register",
        this.state.credentials
      )
      .then(response => {
        console.log("response value: ", response);
        // localStorage.setItem("token", response.data.payload);
        this.props.history.push("/login");
      })
      .catch(err => console.log("error: ", err.response));
  };

  render() {
    return (
      <div className="app">
        <h1>Register</h1>
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
            <button type="submit">Register!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
