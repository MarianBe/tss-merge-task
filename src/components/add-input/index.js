/* eslint-disable radix */
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(200, 200, 200, 0.4);
`
const textFieldStyle = {
  width: '300px',
  height: '57px',
  margin: '0 10px '
}
const buttonStyle = {
  height: '57px',
  margin: '0 10px'
}
const AddInput = ({ addData, loadRandomSet }) => {
  const [input, setInput] = useState()
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
    const inputArray = input.split(',')
    inputArray.forEach((inputNumber, index) => {
      inputArray[index] = parseInt(inputNumber)
    })
    if (inputArray[0] > inputArray[1]) {
      setError('Die erste Zahl muss kleiner sein als die zweite')
      return
    }
    if (inputArray[0] === inputArray[1]) {
      setError('Die beiden Zahlen dürfen nicht gleichgroß sein')
      return
    }
    addData(inputArray)
  }
  /* Handle the Inputchange and clear the Error */
  const handleChange = event => {
    setInput(event.target.value)
    setError()
  }

  return (
    <Container>
      <TextField
        id="standard-textarea"
        label="Zahlen mit Komma getrennt eingeben"
        placeholder="Bsp: 14, 23"
        /* InputLabelProps={{
          shrink: true
        }} */
        multiline
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        style={textFieldStyle}
      />
      {error}
      <Button
        variant="contained"
        color="primary"
        style={buttonStyle}
        onClick={checkAdd}>
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={buttonStyle}
        onClick={handleDialogClickOpen}>
        Zufallsdaten laden
      </Button>
      {/* Confirm Dialog for the Random Dataset */}
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Zufallsdaten laden?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Dabei werden Ihre bisher eingegeben Daten überschrieben. Sind sie
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
