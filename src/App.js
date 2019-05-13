import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <div className="container">
          <Route to="/" component={ Home } />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
