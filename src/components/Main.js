import React from 'react'
import styled from 'styled-components'
import Map from './Map'

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Main = (props) => (
  <MainSection>
    <Map />
  </MainSection>
)

export default Main
