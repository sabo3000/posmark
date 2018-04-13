import React from 'react'
import styled, { css } from 'styled-components'

const StyledListView = styled.div`
  height: 0;
  width: 0;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  @media screen and (orientation: portrait) {
    ${props => props.isDisplayed && css`
      opacity: 1;
      height: 50%;
    `}
  }
  @media screen and (orientation: landscape) {
    ${props => props.isDisplayed && css`
      opacity: 1;
      width: 50%;
    `}
  }
`

const ListView = ({positions, isDisplayed}) => (
  <StyledListView isDisplayed={isDisplayed}>
    <ul>
      { positions.map(({id, name}) =>
        <li key={id}>{name}</li>
      )}
    </ul>
  </StyledListView>
)

export default ListView
