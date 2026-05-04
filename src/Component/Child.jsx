import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../Context/Context'

export default function Child() {
  const user = useContext(DataContext)

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {user.name}</p>
      <p>Course: {user.course}</p>
    </div>
  )
}