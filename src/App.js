import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home/'
import Games from './containers/Games/'
import GamesForm from './containers/Games/Form'
import Login from './containers/Login/'
import Signup from './containers/Signup/'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Games' component={Games} />
      <Route exact path='/Games/new' component={GamesForm} />
      <Route exact path='/Games/:id' component={GamesForm} />

      //<Route exact path='/Games' component={Games} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
    </Switch>
  </Router>
)

export default App;
