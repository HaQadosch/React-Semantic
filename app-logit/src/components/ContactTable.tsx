import React, { useState } from 'react'
import { useContactsContext } from './ContextContact';
import { Segment, Table, Button, Icon } from 'semantic-ui-react';

export const ContactTable = () => {
  const { contacts, delContact } = useContactsContext()
  const [selectedId, setSelectedId] = useState()

  const onRemoveUser = () => {
    delContact(selectedId)
    setSelectedId(null)
  }

  const rows = contacts.map(({ id, name, email }) => {
    return (
      <Table.Row key={id} onClick={() => setSelectedId(id)} active={id === selectedId} >
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
      </Table.Row>
    )
  })

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth >
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4' >
              <Button floated='right' icon labelPosition='left' color='red' size='small' disabled={!selectedId} onClick={onRemoveUser} >
                <Icon name='trash' />
                Remove User
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  )
}

export default ContactTable
