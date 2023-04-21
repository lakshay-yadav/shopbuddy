import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import signin from './components/signin'

const Routes = () => {
  return (
     
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path= '/signup' component={Signup} />
        <Route exact path= '/signin' component={signin}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes