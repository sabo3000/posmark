import React from 'react'
import styled from 'styled-components'
import List, {
  ListSubheader,
  ListItem,
  ListItemText
} from 'material-ui/List'

const StyledListView = styled.div`
  display: block;
`

const ListView = ({positions}) => (
  <StyledListView>
    <List subheader={<ListSubheader>2 marked positions</ListSubheader>}>
      { positions.map(({id, name}) =>
        <ListItem key={id} button>
          <ListItemText primary={name} />
        </ListItem>
      )}
    </List>
  </StyledListView>
)

export default ListView
