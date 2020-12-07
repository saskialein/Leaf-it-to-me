import React from 'react'
import { connect } from 'react-redux'
import { getDecodedToken, isAuthenticated, register } from 'authenticare/client'

import { logIn } from '../actions/auth'

import { baseApiUrl as baseUrl } from '../config'

class Register extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    email: '',
  }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleClick = (e) => {
      e.preventDefault()
      const { name, username, password, email } = this.state
      register({ name, username, password, email }, { baseUrl })
        .then((token) => {
          if (isAuthenticated()) {
            const user = getDecodedToken()
            this.props.dispatch(logIn(user))
            this.props.history.push('/saved')
          }
          return null
        })
        .catch(err => alert(err.message))
    }

  handleClick = (e) => {
    e.preventDefault()
    const { name, username, password, email } = this.state
    register({ name, username, password, email }, { baseUrl })
      .then((token) => {
        if (isAuthenticated()) {
          const user = getDecodedToken()
          this.props.dispatch(logIn(user))
          this.props.history.push('/')
        }
        return null
      })
      .catch((err) => alert(err.message))
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <p>Sign up to add plants to your very own personalised profile where you can keep track of all of your plant needs in one handy location and leaf the rest to us</p>
        <form className="form" onSubmit={this.handleClick}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.name}
            autoFocus={true}
            name="name"
            label="Name"
            type="text"
            placeholder="Let's get to know each other"
            alt="Please enter your name here"
          />
          <br />
          <label htmlFor="name">Email: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.email}
            autoFocus={true}
            name="email"
            label="Name"
            type="text"
            placeholder="So we can keep in touch"
          />
          <br />
          <label htmlFor="name">Username: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.username}
            autoFocus={true}
            name="username"
            label="Name"
            type="text"
            placeholder="We hear DeathEagle is popular ;)"
            alt="Please enter your username here"
          />
          <br />
          <label htmlFor="name">Password: </label>
          <input
            onChange={this.handleChange}
            className="input"
            value={this.state.password}
            autoFocus={true}
            name="password"
            label="Name"
            type="password"
            placeholder=""
          />
          <br />
          <button className="text-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(Register)
