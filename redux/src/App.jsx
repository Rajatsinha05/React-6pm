import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increase } from './redux/Action'
import { getPosts } from './redux/post/action'

const App = () => {
  // let { count } = useSelector((store) => store)
  const dispatch = useDispatch()
  const add = () => {
    dispatch(increase(10))
  }
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  let data = useSelector(store => store.post)
  console.log(data.post);

  return (
    <div>
      {/* <h1>count :{count}</h1> */}
      <button onClick={add} >INC</button>
      <button onClick={() => dispatch(decrement())}>DEC</button>
    </div>
  )
}

export default App