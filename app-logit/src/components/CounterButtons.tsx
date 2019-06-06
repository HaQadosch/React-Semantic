import React from 'react'
import { Button } from 'semantic-ui-react'
import { useCounterContext } from './ContextCounter'

export const CounterButtons = () => {
  const { increment, decrement } = useCounterContext()

  return (
    <div>
      <Button.Group>
        <Button color="green" onClick={increment} >Add</Button>
        <Button color="red" onClick={decrement} >Sub</Button>
      </Button.Group>
    </div>
  )
}
