import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import 'theme/App.css'
import styled from 'styled-components'
import Chips from 'components/chips'
import Loader from 'components/loader'
import AddInput from 'components/add-input'
import { MERGE } from 'services/intervalService'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px;
`
const Home = () => {
  const [data, setData] = useState([])
  const [mergedData, setMergedData] = useState([])

  const [loading, setLoading] = useState(false)

  const addData = element => {
    const newData = [...data, element]
    setData(newData)
  }

  const loadRandomSet = async () => {
    setLoading(true)
    setTimeout(() => {
      const data = Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 1000000),
        Math.floor(Math.random() * 1000000)
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
  const deleteElement = index => {
    const newData = [...data]
    newData.splice(index, 1)
    setData(newData)
  }

  useEffect(() => {
    setMergedData(MERGE(data))
  }, [data])

  return (
    <Container>
      {loading && <Loader />}
      <Grid container spacing={1}>
        <Grid container item xs={12}>
          <AddInput addData={addData} loadRandomSet={loadRandomSet} />
        </Grid>
        <Grid container item xs={12}>
          <Chips title="Eingabe" data={data} onDelete={deleteElement} />
        </Grid>
        <Grid container item xs={12}>
          <Chips title="Ausgabe" data={mergedData} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
