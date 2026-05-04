import React from 'react'
import { DataContext } from '../Context/Context'
import Child from './Child'

export default function Parent() {
  const user = {
    name: 'Prithvee Singh Yadav',
    course: 'React',
  }

  return (
    <DataContext.Provider value={user}>
      <section>
        <h2>Parent Component</h2>
        <p>This component provides user data to a nested child through Context.</p>
        <Child />
      </section>
    </DataContext.Provider>
  )
}