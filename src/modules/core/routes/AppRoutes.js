import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes
import TicketsRoutes from 'modules/tickets/routes'
import SettingsRoutes from 'modules/settings/routes'

import { ticketsRoutes } from 'modules/tickets/routes/constants'
import { settingsRoutes } from 'modules/settings/routes/constants'

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={ticketsRoutes.root}>
        <TicketsRoutes />
      </Route>
      <Route path={settingsRoutes.root}>
        <SettingsRoutes />
      </Route>
    </Switch>
  )
}

export default AppRoutes
