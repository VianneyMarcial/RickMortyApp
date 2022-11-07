import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {
  
  const [ character, setCharacter] =useState();
  
  useEffect(() => {
    axios.get(url)
      .then(res=> setCharacter(res.data));
  }, [])

  return character && (
    <li>
      <div className='characterInfo'>
        <h3>{character.name}</h3>
        <img src={character.image} alt="" className='character' /> <br />
        <div className='info'>
          <div className='postInfo'>
          <div className={`circle ${character.status.toLowerCase()}`}> </div> {character.status} <br />
            <b>Origin: </b> {character.origin.name} <br />
            <b>Episodes where apperar: </b> {character.episode.length}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ResidentInfo;