import React from 'react'
import { connect } from 'react-redux'
import { getDecodedToken, isAuthenticated, register } from 'authenticare/client'

//still need to write this action:
import { logIn } from '../actions/auth' 

import { baseApiUrl as baseUrl } from '../config'

class Register extends React.Component {
    state = {
      username: '',
      password: ''
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleClick = (e) => {
      e.preventDefault()
      const { username, password } = this.state
      register({ username, password }, { baseUrl })
        .then((token) => {
          if (isAuthenticated()) {
            const user = getDecodedToken()
            this.props.dispatch(logIn(user))
            this.props.history.push('/home')
          }
          return null
        })
        .catch(err => alert(err.message))
    }

    render () {
      return (
        <div>
          <h2>Register</h2>
          <form className='form' onSubmit={this.handleClick}>
            <label className='btn' htmlFor="name">Username: </label>
            <input onChange={this.handleChange} className='input' value={this.state.username} autoFocus={true} name="username" label='Name' type="text"/>
            <br/>
            <label className='btn' htmlFor="name">Password: </label>
            <input onChange={this.handleChange} className='input' value={this.state.password} autoFocus={true} name="password" label='Name' type="password"/>
            <br/>

            <button className='text-btn' type="submit"> Submit </button>
          </form>
        </div>
      )
    }
}

export default connect()(Register)