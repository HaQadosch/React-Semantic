import React from 'react'
import { Segment } from 'semantic-ui-react'
import { useCounterContext } from './ContextCounter';
import { CounterDisplay } from './CounterDisplay';
import { CounterButtons } from './CounterButtons';

export const Counter = () => {
  return (
    <useCounterContext.Provider>
      <h3>Counter</h3>
      <Segment textAlign="center" >
        <CounterDisplay />
        <CounterButtons />
      </Segment>
    </useCounterContext.Provider>
  )
}
