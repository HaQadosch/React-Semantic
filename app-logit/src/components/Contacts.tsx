import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { useContactsContext } from './ContextContact';
import ContactForm from './ContactForm';
import ContactTable from './ContactTable';

export const Contacts: React.FC = () => {
  return (
    <useContactsContext.Provider>
      <Segment basic>
        <Header as='h3'>Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </useContactsContext.Provider>
  )
}
