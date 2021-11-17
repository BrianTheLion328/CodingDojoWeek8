import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
  }, []);

  return (
    <div className="App">
      {pokemon.length > 0 && pokemon.map((poke, index) => {
        return (
          <li key={index}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
        )
      })}
    </div>
  );
}

export default App;
