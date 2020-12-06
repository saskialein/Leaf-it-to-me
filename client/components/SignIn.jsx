import React from "react";
import { connect } from "react-redux";
import { getDecodedToken, isAuthenticated, signIn } from "authenticare/client";

import { baseApiUrl as baseUrl } from "../config";
import { logIn } from "../actions/auth";
import { fetchUsersPlants } from "../actions/usersPlants";


class SignIn extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          const user = getDecodedToken();
          this.props.dispatch(logIn(user))
          this.props.dispatch(fetchUsersPlants(user.id))
          this.props.history.push("/userprofile");
        }
        return null;
      })
      .catch((err) => alert(err.message));
  };

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form className="form" onSubmit={this.handleClick}>
          <label className="btn" htmlFor="name">
            Username:{" "}
          </label>
          <input
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
            type="text"
          ></input>
          <br />
          <label className="btn" htmlFor="name">
            Password:{" "}
          </label>
          <input
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
          ></input>
          <br />
          <button className="text-btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(SignIn);
