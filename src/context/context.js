import React, { Component } from "react"
import { fetchTopTracks } from "../api/musixmatch"

const Context = React.createContext()

const reducer = (prevState, action) => {
  const newState = { ...prevState }
  switch (action.type) {
    case "SEARCH_TRACKS":
      newState.trackList = action.payload
      newState.heading = "Search Results"
      return newState
    default:
      return prevState
  }
}

class ContextProvider extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      trackList: [],
      heading: "Top 10 Tracks",
      dispatch: action => this.setState(state => reducer(state, action))
    }
  }

  componentDidMount() {
    fetchTopTracks()
      .then(data => {
        this.setState({
          trackList: data.message.body.track_list.map(item => item.track)
        })
      })
      .catch(err => console.log("Error to get Musix Match data:", err))
  }

  render() {
    return (
      <Context.Provider value={ { ...this.state } }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

const ContextConsumer = Context.Consumer

const withContext = (WrappedComponent) => (props) => (
  <Context.Consumer>
    { (context) => <WrappedComponent context={ context } { ...props } /> }
  </Context.Consumer>
)

export {
  ContextProvider,
  ContextConsumer,
  withContext
}
