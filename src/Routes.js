import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/signin'
import Profile from './components/Profile'
import Results from './components/Results'

const Routes = () => {
  return (
     
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path= '/signup' component={Signup} />
        <Route exact path= '/signin' component={Signin}/>
        <Route exact path= '/profile' component={Profile} />
        <Route exact path= '/results' component={Results} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes