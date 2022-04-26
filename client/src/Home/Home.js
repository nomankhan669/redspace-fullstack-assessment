import React from "react";
import { CharacterCard } from "./CharacterCard";

const Home = ({characters}) => {

  return (
    <div className='main mt-5'>
      <div className='container'>
        <h1>Star Wars Characters</h1>
        <div className='card-wrapper mt-5'>
          <div className='row'>
            {characters.map(person => (
              <CharacterCard key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;