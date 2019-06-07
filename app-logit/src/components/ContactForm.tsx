import React, { useState } from 'react'
import { useContactsContext } from './ContextContact';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

const useFormInput = (init: string) => {
  const [value, setValue] = useState(init)
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value: inputValue } }) => {
    setValue(inputValue)
  }
  const handleReset = () => setValue('')

  return { value, onChange: handleChange, onReset: handleReset }
}

export const ContactForm = () => {
  const name = useFormInput('')
  const email = useFormInput('')
  const { addContact } = useContactsContext()

  const onSubmit = () => {
    addContact(name.value, email.value)
    name.onReset()
    email.onReset()
  }

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths='3'>
          <Form.Field width={6} >
            <Input placeholder='name surname' {...name} required />
          </Form.Field>
          <Form.Field width={6} >
            <Input placeholder='name@example.com' {...email} type='email' required />
          </Form.Field>
          <Form.Field width={4} >
            <Button primary fluid >New Contact</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  )
}

export default ContactForm
