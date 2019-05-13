import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ContextProvider } from "./context/context"
import Navbar from "./components/layout/Navbar"
import Home from "./components/pages/Home"
import Lyrics from "./components/pages/Lyrics"

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/lyrics/track/:id" component={ Lyrics } />
        </Switch>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
