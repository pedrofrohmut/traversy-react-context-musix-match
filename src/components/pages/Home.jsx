import React from "react"
import styled from "styled-components"
import TrackList from "../track/TrackList"
import Search from "../track/Search"

const Home = () => {
  return (
    <HomeWrapper className="container">
      <Search />
      <TrackList />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div``

export default Home
