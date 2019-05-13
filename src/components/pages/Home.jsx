import React from "react"
import styled from "styled-components"
import TrackList from "../track/TrackList"

const Home = () => {
  return (
    <HomeWrapper className="container">
      <TrackList />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div``

export default Home
