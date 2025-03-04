import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increase } from './redux/Action'
import { deletePost, getPosts } from './redux/post/action'
import BlogCard from './Components/BlogCard'

const App = () => {
  // let { count } = useSelector((store) => store)
  const dispatch = useDispatch()
  const add = () => {
    dispatch(increase(10))
  }
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  let { post } = useSelector(store => store.post)


  const handleDelete = (id) => {
    dispatch(deletePost(id))
    console.log(id + ' delete');

  }


  return (
    <div>
      {
        post && (post.map((post,i) => <BlogCard {...post} onDelete={handleDelete} i={i} />))
      }

    </div>
  )
}

export default App