import React from "react";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./App.css";
import styled from "styled-components";
import Header from "components/header";
const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  padding: 30px;
`;
function App() {
  return (
    <Container>
      <Header />
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <TextField
            id="standard-number"
            label="Zahlen mit Komma getrennt"
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <Button variant="contained" color="primary">
            Hinzufügen
          </Button>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Chip label="[0, 10]" onDelete={() => console.log("delete")} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
