import React from 'react'
import { useState } from 'react'
import {navigate} from "@reach/router"

export default function Form() {
const [category, setCategory] =useState("")
const [id, setId] = useState("")

const handleSubmit = e => {
    e.preventDefault();
    navigate(`/${category}/${id}`)

}
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <select onChange={(e) => setCategory(e.target.value)} name="" id="">
                    <option value="">------</option>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
                <input type="number" onChange={(e) => setId(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}
