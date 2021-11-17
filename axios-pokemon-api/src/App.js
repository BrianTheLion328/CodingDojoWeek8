import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {setAllPokemon(response.data.results)})
      .then(console.log("Pokemon adding complete!"))
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="App">
      {
      allPokemon.map((pokemon, index) =>{
        return (
          <li key={index}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
        )
      })}
    </div>
  );
}

export default App;
