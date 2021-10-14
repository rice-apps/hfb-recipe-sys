import React from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import Main from "../pages/Main"

export const Routes = () => {
    return (
      <div>
        <Router>
          <Switch>
            <Route path={'/recipes'} component={Main} />
            {/* <Route path={'/recipes/:id'} component={Main} /> */}
          </Switch>
        </Router>
      </div>
    )
  }