import React from 'react'
import { useContext } from 'react'
import { context } from './context/ContextProvider'
import Button from './Button'

const App = () => {
  const { count, Inc, Dec } = useContext(context)


  return (
    <div>
      <h1> count : {count}</h1>
      <Button/>
    </div>
  )
}

export default App