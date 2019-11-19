import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up'
import Header from './components/header'
import './App.css'
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

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
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App
