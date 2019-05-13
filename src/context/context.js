/* eslint-disable no-undef */
/* eslint-disable quotes */
import React, { Component } from "react"

const Context = React.createContext()

class ContextProvider extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      trackList: [
        // { track: { trackName: "music_a" } },
        // { track: { trackName: "music_b" } },
        // { track: { trackName: "music_c" } }
      ],
      heading: "Top 10 Tracks"
    }
  }

  componentDidMount() {
    const CORS_URL = "https://cors-anywhere.herokuapp.com/"

    const MUSIX_MATCH_ROOT_URL = "https://api.musixmatch.com/ws/1.1/"

    const URL = 
      CORS_URL + 
      MUSIX_MATCH_ROOT_URL +
      "chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1" + 
      `&apikey=${process.env.REACT_APP_MUSIXMATCH_API_KEY}`

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTimeout(() => {
          this.setState({
            trackList: data.message.body.track_list
          })
        }, 2000)
        console.log(this.state)
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