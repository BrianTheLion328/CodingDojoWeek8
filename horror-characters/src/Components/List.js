import React from 'react'
import '../App.css'


export default function List({character}) {


    return (
        <div className="list">
            <h2 className="listItem">Name: {character.name}</h2>
            <p className="listItem">Weapon: {character.weapon}</p>
            <p className="listItem">Outfit: {character.outfit}</p>
            <p className="listItem">Kill Count: {character.victimCount}</p>
            <p className="listItem">Home: {character.home}</p>
        </div>

    )
}
