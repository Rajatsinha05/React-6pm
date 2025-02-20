import React from 'react'
import { useContext } from 'react'
import { context } from './context/ContextProvider'
const Button = () => {
    const { count, Inc, Dec } = useContext(context)
  return (
    <div>
        <button onClick={()=>Inc(10)}>+</button>
    </div>
  )
}

export default Button