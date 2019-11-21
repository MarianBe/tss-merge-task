import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import './App.css'
import styled from 'styled-components'
import Header from 'components/header'
import Chips from 'components/chips'
import Loader from 'components/loader'
import AddInput from 'components/add-input'
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const addData = element => {
    const newData = [...data, element]
    setData(newData)
  }

  const loadRandomSet = async () => {
    setLoading(true)
    setTimeout(() => {
      const data = Array.from({ length: 1000 }, () => [
        Math.floor(Math.random() * 1000),
        Math.floor(Math.random() * 1000)
      ])
      data.forEach(innerArray => {
        if (innerArray[0] > innerArray[1]) {
          const memory = innerArray[0]
          innerArray[0] = innerArray[1]
          innerArray[1] = memory
        }
      })
      setData(data)
      setLoading(false)
    }, 1)
  }

  return (
    <Container>
      {loading && <Loader />}
      <Header />
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <AddInput addData={addData} loadRandomSet={loadRandomSet} />
        </Grid>
        <Grid container item xs={12}>
          <Chips
            title="Eingabe"
            data={data}
            onDelete={element => console.log('delete', element)}
          />
        </Grid>
        <Grid container item xs={12}>
          <Chips title="Ausgabe" data={data} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
