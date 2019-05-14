const CORS_URL = "https://cors-anywhere.herokuapp.com/"

const MUSIX_MATCH_ROOT_URL = "https://api.musixmatch.com/ws/1.1/"

const API_KEY_PARAM = "apikey=" + process.env.REACT_APP_MUSIXMATCH_API_KEY

const fetchMusixMatch = (apiMethod, apiParams) => {
  const PARAMS = "?" + apiParams + "&" + API_KEY_PARAM
  const URL = CORS_URL + MUSIX_MATCH_ROOT_URL + apiMethod + PARAMS
  return (
    fetch(URL).then(response => response.json())
  )
}

const fetchLyrics = (trackId) => {
  const method = "track.lyrics.get"
  const params = "track_id=" + trackId
  return fetchMusixMatch(method, params)
}

const fetchTrack = (trackId) => {
  const method = "track.get"
  const params = "track_id=" + trackId
  return fetchMusixMatch(method, params)
}

const fetchSearchTrack = (queryTrack) => {
  const method = "track.search"
  const params = "q_track=" + queryTrack
  return fetchMusixMatch(method, params)
}

export {
  fetchLyrics,
  fetchTrack,
  fetchSearchTrack
}

