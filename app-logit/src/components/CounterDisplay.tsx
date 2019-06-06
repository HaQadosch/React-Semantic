import React from 'react'
import { Statistic } from 'semantic-ui-react'

import { useCounterContext } from './ContextCounter';

export const CounterDisplay: React.FC = () => {
  const { count } = useCounterContext()


  return (
    <Statistic>
      <Statistic.Value>{count}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  )
}

