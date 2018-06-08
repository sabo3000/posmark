import React from 'react'
import styled, { css } from 'styled-components'
import DeleteIcon from 'material-ui-icons/Delete'

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

const Cell = styled.td`
  :first-child{ width: 100%; }
`
const Link = styled.a`
  display: flex;
`

Link.defaultProps = {
  href: '#'
}

const ListView = ({positions, isDisplayed, deletePosition}) => (
  <StyledListView isDisplayed={isDisplayed}>
    <Content>
      <table>
        <thead>
          <tr>
            <th colSpan='2'>Your List of Positions</th>
          </tr>
        </thead>
        <tbody>
          { positions.map(({id, name}) => (
            <tr key={id}>
              <Cell>{name}</Cell>
              <Cell>
                <Link onClick={(e) => deletePosition(e, id)}>
                  <DeleteIcon />
                </Link>
              </Cell>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  </StyledListView>
)

export default ListView
