/* eslint-disable radix */
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(200, 200, 200, 0.4);
`
const textFieldStyle = {
  width: '100%',
  height: '57px',
  margin: '0 0 10px'
}
const buttonStyle = {
  width: '100%',
  height: '57px',
  margin: '0'
}
const regex = RegExp('^[-]?[0-9]+(,[ ]?[-]?[0-9]+)$')

const AddInput = ({ addData, loadRandomSet, clear }) => {
  const [input, setInput] = useState('')
  const [error, setError] = useState()
  /* For the Confirm Dialog */
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const handleDialogClickOpen = () => {
    setDialogOpen(true)
  }
  const handleDialogClose = loadRandom => {
    if (loadRandom) loadRandomSet()
    setDialogOpen(false)
  }

  /* Check the Inputs and then add to the Array if they are alright */
  const checkAdd = () => {
    /* check if the input fits our regex */
    if (!regex.test(input)) {
      setError('Fehler bei der Eingabe')
      return
    }
    let inputArray = input.split(',')

    // Parse inputs to integers
    inputArray.forEach((inputNumber, index) => {
      inputArray[index] = parseInt(inputNumber)
    })

    // Check if first number bigger than second number
    if (inputArray[0] > inputArray[1]) {
      // Reverse the inputs
      inputArray = inputArray.reverse()
    }

    addData(inputArray)
    setInput('')
  }
  /** Clear the input and output */
  const clearAll = () => {
    clear()
    setInput('')
    setError()
  }
  /* Handle the Inputchange and clear the Error */
  const handleChange = event => {
    setInput(event.target.value)
    setError()
  }
  /* Check if User submitted with enter key */
  const keyPress = e => {
    if (e.keyCode === 13) {
      checkAdd()
    }
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={8} lg={6}>
          <TextField
            name="NumberInput"
            label="Zahlen mit Komma getrennt eingeben"
            placeholder="Bsp: 14, 23"
            onChange={handleChange}
            value={input}
            margin="normal"
            variant="outlined"
            style={textFieldStyle}
            onKeyDown={keyPress}
            error={Boolean(error)}
            helperText={error}
          />
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            onClick={checkAdd}>
            <Icon>add</Icon>
          </Button>
        </Grid>
        <Grid item xs={6} sm={2} md={2} lg={2}>
          <Button
            variant="contained"
            color="secondary"
            style={buttonStyle}
            onClick={clearAll}>
            <Icon>delete-outline</Icon>
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={2}>
          <Button
            variant="contained"
            color="default"
            style={buttonStyle}
            onClick={handleDialogClickOpen}>
            Zufallsdaten laden
          </Button>
        </Grid>
      </Grid>
      {/* Confirm Dialog for the Random Dataset */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Zufallsdaten laden?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Dabei werden Ihre bisher eingegeben Daten überschrieben. Sind Sie
            sicher?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDialogClose(false)} color="primary">
            Nein!
          </Button>
          <Button
            onClick={() => handleDialogClose(true)}
            color="primary"
            autoFocus>
            Ja
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default AddInput
