import React, { useState } from 'react'
import List from '../List/List'
import { data } from '../../components/StaticData/items'

const Home = () => {
  const [people,setPeople]=useState(data)
  return (
    <main>
        <section className="container">
            <h3>{people.length} Birthday today</h3>
            <List people={people}/>
            <button onClick={()=>setPeople([])}>Clear All</button>
        </section>
    </main>
  )
}

export default Home