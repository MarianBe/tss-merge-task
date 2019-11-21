import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'
const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex: 1;
  background: rgba(220, 220, 220, 0.6);
  justify-content: center;
  align-items: center;
`
const Loader = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}

export default Loader
