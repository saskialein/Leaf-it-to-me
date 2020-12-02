import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'


import NavHorizontal from './NavHorizontal.jsx'
import Header from './Header.jsx'


// import NewComponent from './NewComponent.jsx'



class App extends React.Component {
    render () {
      return (
        <>
          <Header/>
          <NavHorizontal/>
        </>
      )
    }
  }

export default App
