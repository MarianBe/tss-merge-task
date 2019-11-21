import React from 'react'
import Chip from '@material-ui/core/Chip'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  margin: 10px 0;
  padding: 20px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${props =>
    props.isInput ? 'rgba(100, 220, 100, 0.6)' : 'rgba(220,100,100, 0.6)'};
`
const ChipContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 10px 0;
`
const NoData = styled.p`
  font-size: 16px;
  font-weight: 400;
`
const chipStyle = {
  margin: '5px ',
  flex: '1 10%'
}
const Header = ({ data, onDelete, title }) => {
  return (
    <Container isInput={title === 'Eingabe'}>
      {title}
      {data && data.length > 0 ? (
        <ChipContainer>
          {data.map((element, index) => (
            <Chip
              style={chipStyle}
              label={`[${element[0]}, ${element[1]}]`}
              onDelete={onDelete ? () => onDelete(element, index) : undefined}
            />
          ))}
        </ChipContainer>
      ) : (
        <NoData>Noch keine Daten vorhanden</NoData>
      )}
    </Container>
  )
}

export default Header
