import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import Header from './components/header'
import Spinner from './components/spinner'
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'

import { GlobalStyle } from './global.styles'
import { setCurrentUser } from './redux/user/actions'
import { getCurrentUser } from './redux/user/selectors'

const HomePage = lazy(() => import('./pages/homepage'))
const ShopPage = lazy(() => import('./pages/shop'))
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up')
)
const CheckoutPage = lazy(() => import('./pages/checkout'))

function App({ currentUser = {}, setCurrentUser = () => {} }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
          })
        }
        setCurrentUser(userAuth)
      }
    )
    return () => unsubscribeFromAuth()
  }, [setCurrentUser])

  return (
    <div>
      <GlobalStyle />
      <Header currentUser={currentUser} />
      <Switch>
        <Suspense fallback={Spinner}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              !isEmpty(currentUser) ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Suspense>
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, { setCurrentUser })(App)
