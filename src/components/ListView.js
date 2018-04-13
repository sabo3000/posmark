import React from 'react'
import styled, { css } from 'styled-components'

const StyledListView = styled.div`
  opacity: 0;
  transition: all 0.2s ease-in-out;
  @media screen and (orientation: portrait) {
    height: 0;
    width: 100%;
    ${props => props.isDisplayed && css`
      opacity: 1;
      height: 50%;
    `}
  }
  @media screen and (orientation: landscape) {
    height: 100%;
    width: 0;
    ${props => props.isDisplayed && css`
      opacity: 1;
      width: 50%;
    `}
  }
`
const Content = styled.div`
  padding: 15px;
`

const ListView = ({positions, isDisplayed}) => (
  <StyledListView isDisplayed={isDisplayed}>
    <Content>
      <h3>Your List of Positions</h3>
      <ul>
        { positions.map(({id, name}) =>
          <li key={id}>{name}</li>
        )}
      </ul>
    </Content>
  </StyledListView>
)

export default ListView
