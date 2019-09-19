import React, { Component } from 'react'
import Logo from './images/Logo.png'
import Home from './components/Home'
import Header from './components/Header'
import Results from './components/Results'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <header>
          <div className="logo-header">
            <img className="images" src={Logo} alt="Drop Pin Logo" />
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Results" component={Results}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
