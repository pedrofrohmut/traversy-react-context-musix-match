import React, { Component } from "react"

const Context = React.createContext()

class Provider extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      trackList: [
        { track: { trackName: "music_a" } },
        { track: { trackName: "music_b" } },
        { track: { trackName: "music_c" } }
      ],
      heading: "Top 10 Tracks"
    }
  }

  render() {
    return (
      <Context.Provider value={ { ...this.state } }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

const Consumer = Context.Consumer

const withContext = (WrappedComponent) => (props) => (
  <Context.Consumer>
    { (context) => <WrappedComponent context={ context } { ...props } /> }
  </Context.Consumer>
)

export {
  Provider,
  Consumer,
  withContext
}