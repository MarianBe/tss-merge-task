import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  padding: 30px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error if we have a crash
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Render Error
      return (
        <Container>
          <h1>Something went wrong.</h1>
          <img src="https://http.cat/500" />
        </Container>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
