import React from 'react'
import Chip from '@material-ui/core/Chip'

const Header = ({ data, onDelete, title }) => {
  return data.map(element => (
    <Chip
      label={`[${element[0]}, ${element[1]}]`}
      onDelete={onDelete ? () => onDelete(element) : undefined}
    />
  ))
}

export default Header
