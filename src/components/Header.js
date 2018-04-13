import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Button from '@atlaskit/button'
import Modal from '@atlaskit/modal-dialog'
import TextField from '@atlaskit/field-text'
import ListIcon from 'material-ui-icons/List'
import AddLocationIcon from 'material-ui-icons/AddLocation'
import Geo from './Geo'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: silver;
  padding: 15px;
`

class Header extends PureComponent {
  constructor () {
    super()
    this.state = {
      isModalOpen: false,
      posTitle: ''
    }
    this.geo = new Geo()
  }

  openModal = () => this.setState({
    isModalOpen: true,
    posTitle: ''
  })

  closeModal = () => this.setState({ isModalOpen: false })

  addPosition = () => {
    this.setState({ isModalOpen: false })
    this.geo.getCoords().then((coords) => {
      this.props.addPosition({
        name: this.state.posTitle,
        lat: coords.latitude,
        lng: coords.longitude
      })
    }, (error) => console.error(error))
  }

  changeTitle = (event) => this.setState({ posTitle: event.target.value })

  render () {
    const { toggleList, isListDisplayed } = this.props
    const modalActions = [
      { text: 'Close', onClick: this.closeModal, appearance: 'default' },
      { text: 'Add', onClick: this.addPosition, appearance: 'primary' }
    ]

    return (
      <StyledHeader>
        <Button
          appearance='default'
          iconBefore={<ListIcon />}
          onClick={toggleList}
          isSelected={isListDisplayed}>
          Show List
        </Button>
        <Button
          appearance='primary'
          iconBefore={<AddLocationIcon />}
          onClick={this.openModal}>
          Add Position
        </Button>
        { this.state.isModalOpen &&
          <Modal
            heading='Add current position'
            actions={modalActions}
            onClose={this.closeModal}>
            <TextField
              label='Name this position'
              shouldFitContainer
              value={this.state.posTitle}
              onChange={this.changeTitle}
            />
          </Modal>
        }
      </StyledHeader>
    )
  }
}

Header.defaultProps = {
  addPosition: () => {},
  toggleList: () => {}
}

export default Header
