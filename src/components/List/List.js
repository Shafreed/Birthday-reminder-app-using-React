import React from 'react'

const List = ({ people }) => {
  return (
    <>
      {
        people.map((person) => (
          
            <article className='person' key={person.id} >
              <img src={person.Image} alt="loading" />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
              </div>
            </article>
          )
        

        )
        }
    </>
  )
}

export default List;