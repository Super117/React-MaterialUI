import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// pages
import EditBillingInfo from '../pages/EditBillingInfo'

import { settingsRoutes } from './constants'

import EN_TRANSLATIONS from '../locale/en.json'

const SettingsRoutes = () => {
  return (
    <IntlProvider messages={EN_TRANSLATIONS} locale="en">
      <Switch>
        <Route path={settingsRoutes.root} exact>
          <EditBillingInfo />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default SettingsRoutes
