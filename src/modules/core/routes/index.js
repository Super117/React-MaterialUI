import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AuthRoutes from 'modules/auth/routes/AuthRoutes'
import ToolbarLayout from '../components/ToolbarLayout'

// routes
import AppRoutes from './AppRoutes'

const RootRoutes = () => {
  return (
    <Switch>
      <Route path="/auth">
        <AuthRoutes />
      </Route>
      <Route path="/app">
        <ToolbarLayout>
          <AppRoutes />
        </ToolbarLayout>
      </Route>
    </Switch>
  )
}

export default RootRoutes
