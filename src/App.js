import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/index'
import ShopPage from './pages/shop/index'
import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
