import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ContextProvider } from "./context/context"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route to="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
