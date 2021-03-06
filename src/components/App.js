//not sure if we need these imports. from queries:loading links
import React, { Component } from 'react'
import LinkList from './LinkList'
import Login from './Login'

//commented out below and it made the site work
//import { render } from '@testing-library/react';
import '../styles/App.css';
import CreateLink from './CreateLink'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './Search'
import FilteredList from './FilteredList'
import UserList from './UserList'
import CreateComment from './CreateComment'
import CommentList from './CommentList'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/new/1' />} />
            <Route exact path='/create' component={CreateLink} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/top' component={LinkList} />
            <Route exact path='/new/:page' component={LinkList} />
            <Route exact path='/filteredlist' component={FilteredList} />
            <Route exact path='/userlist' component={UserList} />
            <Route exact path='/createcomment' component={CreateComment} />
            <Route exact path='/commentlist' component={CommentList} />
            
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;