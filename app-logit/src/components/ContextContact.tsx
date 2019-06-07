import { useReducer } from 'react'
import _ from 'lodash'
import { produce } from 'immer'
import createUseContext from 'constate'

interface IContact {
  readonly id: string
  readonly name: string
  readonly email: string
}

const initialContacts: IContact[] = [
  { id: '098', name: 'Diana Prince', email: 'diana@us.army.mil' },
  { id: '099', name: 'Bruce Wayne', email: 'bruce@batman.mail' },
  { id: '100', name: 'Clark Kent', email: 'clark@metropolitan.com' },
]

type TState = {
  contacts: IContact[]
  loading: boolean
}

const initialState: TState = {
  contacts: initialContacts,
  loading: false,
}

type TActionTypes = 'ADD_CONTACT' | 'DEL_CONTACT' | 'START' | 'COMPLETE'
type TActions<T> = {
  type: TActionTypes
  payload: T
}

const reducer = (state: TState, action: TActions<any>) =>
  produce(state, draft => {
    switch (action.type) {
      case 'ADD_CONTACT':
        draft.contacts.push(action.payload.contact)
        break;
      case 'DEL_CONTACT':
        draft.contacts = draft.contacts.filter(contact => contact.id !== action.payload.id)
        break;
      case 'START':
        draft.loading = true
        break;
      case 'COMPLETE':
        draft.loading = false
        break;
    }
  })

const useContacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { contacts, loading } = state

  const addContact = (name: string, email: string) => {
    const action: TActions<{ contact: IContact }> = {
      type: 'ADD_CONTACT',
      payload: { contact: { id: _.uniqueId('10'), name, email } }
    }
    dispatch(action)
  }

  const delContact = (id: string) => {
    const action: TActions<{ id: string }> = {
      type: 'DEL_CONTACT',
      payload: { id }
    }
    dispatch(action)
  }

  return { contacts, loading, addContact, delContact }
}

export const useContactsContext = createUseContext(useContacts)