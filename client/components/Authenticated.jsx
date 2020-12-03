import React from 'react'
import { isAuthenticated } from 'authenticare/client'
import { connect } from 'react-redux'

// this is a helper component, used to display components based on authentication

const Authenticated = ({ children, loggedIn }) => {
  return (loggedIn && isAuthenticated())
    ? <>{ children }</>
    : null
}
const NotAuthenticated = ({ children, loggedIn }) => {
  return (!loggedIn || !isAuthenticated())
    ? <>{ children }</>
    : null
}

function mapStateToProps (globalState) {
  return {
    loggedIn: globalState.auth.loggedIn
  }
}

export const IfAuthenticated = connect(mapStateToProps)(Authenticated)
export const IfNotAuthenticated = connect(mapStateToProps)(NotAuthenticated)