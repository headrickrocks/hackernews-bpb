//not sure if we need these imports. from queries:loading links
import React, { Component } from 'react'
import LinkList from './LinkList'
import Login from './Login'

//commented out below and it made the site work
//import { render } from '@testing-library/react';
import '../styles/App.css';
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;