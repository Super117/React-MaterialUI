import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

// pages
import LoginPage from 'modules/auth/pages/LoginPage'
import SignupPage from 'modules/auth/pages/SignupPage'
import SignupNextStepPage from 'modules/auth/pages/SignupNextStepPage'
import SignupNextPage from 'modules/auth/pages/SignupNextPage'

import { authRoutes  } from 'modules/auth/routes/constants'

import EN_TRANSLATIONS from '../locale/en.json'

const AuthRoutes = () => {
  return (
    <IntlProvider messages={EN_TRANSLATIONS} locale="en">
      <Switch>
        <Route path={authRoutes.login}>
          <LoginPage />
        </Route>
        <Route path={authRoutes.signup}>
          <SignupPage />
        </Route>
        <Route path={authRoutes.signupNextStep}>
          <SignupNextStepPage />
        </Route>
        <Route path={authRoutes.signupNext}>
          <SignupNextPage />
        </Route>
      </Switch>
    </IntlProvider>
  )
}

export default AuthRoutes
