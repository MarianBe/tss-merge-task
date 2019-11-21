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
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 20px 60px 20px 40px;
  &:hover {
    background: #f6f6f6;
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  font-size: 14px !important;
  line-height: 18px;
  text-decoration: none;
  font-weight: 600;
  color: #1a1a1a;
`

const StyledIcon = styled(Icon)`
  font-size: 18px !important;
  line-height: 1 !important;
  margin-right: 10px;
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
        <StyledLink to="/home">
          <StyledMenuItem onClick={() => setOpen(false)}>
            <StyledIcon>home</StyledIcon>
            Startseite
          </StyledMenuItem>
        </StyledLink>
        <StyledLink to="/impressum">
          <StyledMenuItem onClick={() => setOpen(false)}>
            <StyledIcon>info</StyledIcon>
            Impressum
          </StyledMenuItem>
        </StyledLink>
      </Drawer>
    </div>
  )
}
export default Header
