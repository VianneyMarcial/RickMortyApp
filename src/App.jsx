import axios from 'axios';
import { useEffect, useState } from 'react';
import ResidentInfo from './components/ResidentInfo';

function App() {
  
  const [ location, setLocation ] = useState();
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setLocation(res.data));
  }, []);

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}/`)
    .then(res =>setLocation (res.data));
  }

  return location && (
    <div className="App">
     <div className='location'>
     <img src="https://images6.fanpop.com/image/photos/39500000/Rick-and-Morty-rick-and-morty-39568272-1041-389.png" alt="" className='rickMorty'/>
        <h1>{location.name}</h1>
        <img src="https://i.gifer.com/WG8Q.gif" alt="" className='rick'/>
        <input type="text" value={typeId} onChange={e => setTypeId(e.target.value)}/>
        <button onClick={searchLocation}>search</button>
        
          <div className='locationInfo'>
            <h4> <b>Type: </b>{location.type}</h4>
            <h4> <b>Dimensión: </b>{location.dimension}</h4>
            <h4><b>Population: </b>{location.residents.length}</h4>
          </div>
     </div>
     {location.residents?.map((location) => (
      <ResidentInfo 
        key={location}
        url={location}
      />
      ))}
    </div>
  )
}

export default App

