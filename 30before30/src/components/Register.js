import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        this.props.history.push("/");
      })
      .catch(err => console.log("error: ", err.response));
  };

  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <p>Please create a unique username and password:</p>
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
          <Link to="/">
            <h3>Login now!</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Register;
