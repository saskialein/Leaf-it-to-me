import React from "react";
import { connect } from "react-redux";
import { isAuthenticated, signIn } from "authenticare/client";
import { Link } from 'react-router-dom'
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
      <div className="form-wrapper">
        <h2 >Sign in</h2>
        <hr/>
        <div className="">
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <div className="section">
          <label htmlFor="name">
              Username:
          </label>
            <br/>
          <input
            onChange={this.handleChange}
            name="username"
            value={this.state.username}
              type="text"
              placeholder="Enter username here..."
              ></input>
            </div>
            <br />
            <div className="section">
          <label htmlFor="name">
              Password:
          </label>
            <br/>
          <input
            onChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            placeholder="Enter password here..."
              ></input>
            </div>
           
          <Link className="navy-link" id="submit-button" type="submit">
            Sign in
          </Link>
          
          </form>
          </div>
      </div>
    );
  }
}

export default connect()(SignIn);
