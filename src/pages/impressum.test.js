import React from 'react'
import ReactDOM from 'react-dom'
import Impressum from './impressum'
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Impressum />, div)
})
