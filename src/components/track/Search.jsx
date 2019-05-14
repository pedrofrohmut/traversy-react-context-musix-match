import React, { Component } from "react"
import styled from "styled-components"
import { ContextConsumer } from "../../context/context"
import { fetchSearchTrack } from "../../api/musixmatch"

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackName: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e, dispatch) {
    e.preventDefault()
    const queryTrack = this.state.trackName
    fetchSearchTrack(queryTrack)
      .then(data => {
        // console.log(data)
        const action = {
          type: "SEARCH_TRACKS",
          payload: data.message.body.track_list.map(item => item.track)
        }
        // console.log(action.payload)
        dispatch(action)
        this.setState({ trackName: "" })
      })
      .catch(err => console.log("Error on fetch search track:", err))
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <ContextConsumer>
        { context => {
          const { dispatch } = context
          return (
            <SearchWrapper className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search for a song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={ (e) => this.handleSubmit(e, dispatch) }>
                <div className="form-group">
                  <input 
                    className="form-control form-control-lg" 
                    type="text" 
                    name="trackName"
                    value={ this.state.trackName }
                    onChange={ this.handleInputChange }
                    autoFocus
                    placeholder="Song title..." />
                </div>
                <button 
                  className="btn btn-primary btn-block mb-2" 
                  type="submit"
                > 
                  Get Track Lyrics
                </button>
              </form>
            </SearchWrapper>
          )
        } }
      </ContextConsumer>
    )
  }
}

const SearchWrapper = styled.div``

export default Search
