import React, { Component } from "react"
import styled from "styled-components"
// import { withContext } from "../../context/context"
import { ContextConsumer } from "../../context/context"
import Loading from "../layout/Loading"

class TrackList extends Component {
  render() {
    return (
      <ContextConsumer>
        { 
          context => {
            // console.log(context)
            return (
              <TrackListWrapper>
                { context.trackList.length > 0 ? (
                  <h1>Track List</h1>
                ) : (
                  <Loading />
                ) }
              </TrackListWrapper>
            ) 
          } 
        }
      </ContextConsumer>
    )
  }
}

const TrackListWrapper = styled.div``

// export default withContext(TrackList)

export default TrackList