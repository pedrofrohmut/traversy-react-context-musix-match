import React, { Component } from "react"
import styled from "styled-components"
// import { withContext } from "../../context/context"
import { ContextConsumer } from "../../context/context"
import Track from "./Track"
import Loading from "../layout/Loading"

class TrackList extends Component {
  render() {
    return (
      <ContextConsumer>
        { 
          context => {
            // console.log(context)
            const { trackList, heading } = context
            return (
              <TrackListWrapper>
                { trackList.length > 0 ? (
                  <>
                    <div className="text-center mb-4">{ heading }</div>
                    <div className="row">
                      { trackList.map((track, i) => (
                        <Track key={ i } track={ track } />
                      ))}
                    </div>
                  </>
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
