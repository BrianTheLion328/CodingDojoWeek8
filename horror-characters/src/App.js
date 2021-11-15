import './App.css';
import React, {useState} from 'react';
import List from './Components/List'

function App() {
  const [name, setName] = useState("");
  const [weapon, setWeapon] = useState("");
  const [outfit, setOutfit] = useState("");
  const [victimCount, setVictimCount] = useState(0);
  const [home, setHome] = useState("");
  const [charArray, setCharArray] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    const character = {
      name: name,
      weapon: weapon,
      outfit: outfit,
      victimCount: victimCount,
      home: home
    }
    setCharArray([...charArray, character])

    console.log("CHARACTER: ", character)
    console.log("CHAR ARRAY: ", charArray)

    setName("")
    setWeapon("")
    setOutfit("")
    setVictimCount(0)
    setHome("")
  }

  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
       <div className="input characterInput">
        <label>Enter a Horror Character</label>
        <input type="text" value={ name } onChange={(e) => setName(e.target.value)} />
       </div>
       <div className="input weaponInput">
         <label>Enter a Weapon</label>
         <input type="text" value={ weapon } onChange={(e) => setWeapon(e.target.value)} />
       </div>
       <div className="input outfitInput">
         <label>Enter an outfit</label>
         <input type="text" value={ outfit } onChange={(e) => setOutfit(e.target.value)} />
       </div>
       <div className="input vitcimCountInput">
         <label>How many victims so far?</label>
         <input type="text" value={ victimCount } onChange={(e) => setVictimCount(e.target.value)} />
       </div>
       <div className="input weaponInput">
         <label>Enter a Home</label>
         <input type="text" value={ home } onChange={(e) => setHome(e.target.value)} />
       </div>
       <input className="submitButton" type="submit" value="Add Character"/>
     </form>

    {
      charArray.map( (character, index) => {
        return <List key={index} character={character} />
      })
    }

    </div>
  );
}

export default App;
