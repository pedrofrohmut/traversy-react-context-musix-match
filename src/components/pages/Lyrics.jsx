import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Loading from "../layout/Loading"
import { fetchLyrics, fetchTrack } from "../../api/musixmatch"

class Lyrics extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      track: null,
      lyrics: null 
    }
    this.updateLyrics = this.updateLyrics.bind(this)
    this.updateTrack = this.updateTrack.bind(this)
  }

  componentDidMount() {
    const trackId = this.props.match.params.id
    this.updateLyrics(trackId)
    this.updateTrack(trackId)
  }

  updateLyrics(trackId) {
    fetchLyrics(trackId)
      .then(data => {
        console.log("lyrics:", data)
        this.setState({ 
          lyrics: data.message.body.lyrics 
        })
      })
      .catch(err => console.log("Error to get Musix Match data:", err))
  }

  updateTrack(trackId) {
    fetchTrack(trackId)
      .then(data => { 
        console.log("track:", data)
        this.setState({
          track: data.message.body.track
        })
      })
      .catch(err => console.log("Error to get Musix Match data:", err))
  }

  render() {
    const { lyrics, track } = this.state
    console.log(track)
    return (
      <LyricsWrapper className="container">
        { lyrics && track ? (
          <>
            <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>

            <div className="card">
              <div className="card-header h5">
                { track.track_name } 
                by {" "} <span className="text-secondary">{ track.artist_name }</span>
              </div>

              <div className="card-body">
                <p className="card-text">{ lyrics.lyrics_body }</p>
              </div>

              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <strong>Album ID:</strong> {" "} 
                  { track.album_id }
                </li> 

                <li className="list-group-item">
                  <strong>Song Genre:</strong> {" "} 
                  { track.primary_genres.music_genre_list.length > 0 ?  (
                    track.primary_genres.music_genre_list[0].music_genre.music_genre_name
                  ) : (
                    "not found"
                  ) }
                </li>

                <li className="list-group-item">
                  <strong>Explict Words:</strong> {" "}
                  { track.explict === 0 ? "No" : "Yes" }
                </li>

                <li className="list-group-item">
                  <strong>Release Date:</strong> {" "} 01/03/2019
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Loading />
        ) }
      </LyricsWrapper>
    )
  }
}

const LyricsWrapper = styled.div``

export default Lyrics
