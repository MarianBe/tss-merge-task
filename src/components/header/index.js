import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import variables from '../../theme/variables.js'
import Icon from '@material-ui/core/Icon'
import { Link } from 'react-router-dom'

const StyledMenuItem = styled.div`
  background: '#ffffff';
  padding: 20px 60px 20px 40px;
  &:hover {
    background: #f6f6f6;
    cursor: pointer;
  }
`

const StyledIcon = styled(Icon)`
  font-size: 16px !important;
`

const StyledTypography = styled(Typography)`
  font-size: 16px !important;
  padding: 0 0 0 10px;
`
const appBarStyle = { background: variables.primary }

const Header = () => {
  /** Set the stage of the menu */
  const [open, setOpen] = useState(false)

  /** Handle drawer click  */
  const handleDrawerClick = () => {
    setOpen(!open)
  }

  return (
    <div>
      <AppBar position="sticky" style={appBarStyle}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">TSS Merge Task</Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Link to="/home">
          <StyledMenuItem onClick={() => setOpen(false)}>
            <StyledIcon>home</StyledIcon>
            <StyledTypography variant="p">Startseite</StyledTypography>
          </StyledMenuItem>
        </Link>
        <Link to="/impressum">
          <StyledMenuItem onClick={() => setOpen(false)}>
            <StyledIcon>home</StyledIcon>
            <StyledTypography variant="p">Impressum</StyledTypography>
          </StyledMenuItem>
        </Link>
      </Drawer>
    </div>
  )
}
export default Header
