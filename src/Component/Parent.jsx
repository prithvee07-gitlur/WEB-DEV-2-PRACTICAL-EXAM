import React from 'react'
import { DataContext } from '../Context/Context'
import Child from './Child'

export default function Parent() {
  const user = {
    name: 'Prithvee Singh Yadav',
    Subject: 'Web Dev 2',
  }

  return (
    <DataContext.Provider value={user}>
      <section>
        <h2>Parent Component</h2>
        <p>hello jee</p>
        <Child />
      </section>
    </DataContext.Provider>
  )
}