import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up'
import CheckoutPage from './pages/checkout'
import Header from './components/header'
import './App.css'
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/actions'
import { getCurrentUser } from './redux/user/selectors'

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
      <Header currentUser={currentUser} />
      <Switch>
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
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
})

export default connect(mapStateToProps, { setCurrentUser })(App)
