import React from "react"
import styled from "styled-components"
import loadingGif from "../../images/loading.gif"

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={ loadingGif } alt="Loading..." />
    </LoadingWrapper>
  )
}

const LoadingWrapper = styled.div`
  img {
    margin: 0 auto;
    height: 200px;
    display: block;
  }
`

export default Loading