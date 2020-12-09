import React from "react";
import { connect } from "react-redux";
import { isAuthenticated, signIn } from "authenticare/client";

import { baseApiUrl as baseUrl } from "../config";
import { checkAuth } from "../actions/auth";


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

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signIn({ username, password }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.dispatch(checkAuth())
          this.props.history.push("/plants/saved");
        }
        return null;
      })
      .catch((err) => alert(err.message));
  };

  render() {
    return (
      <div>
        <h2>Sign in</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="btn" htmlFor="username">
            Username:{" "}
          </label>
          <input
            onChange={this.handleChange}
            name="username"
            id="username"
            value={this.state.username}
            type="text"
          ></input>
          <br />
          <label className="btn" htmlFor="password">
            Password:{" "}
          </label>
          <input
            onChange={this.handleChange}
            name="password"
            id="password"
            value={this.state.password}
            type="password"
          ></input>
          <br />
          <label htmlFor="sign-in-button">
            <button className="text-btn" id="sign-in-button" type="submit">
              Sign in
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default connect()(SignIn);
