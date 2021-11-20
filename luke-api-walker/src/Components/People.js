import React, {useState, useEffect} from 'react'
import axios from 'axios'
const BASE_URL = "https://swapi.dev/api/"


export default function People(props) {
    const {id, uri} = props
    const[ peopleData, setPeopleData] = useState({})

    useEffect(() => {
        axios.get(`${BASE_URL}/${uri.slice(1,7)}/${id}`)
        .then(response => setPeopleData(response.data))
        .catch((error) => console.error(error))
    }, []);

    return (
        <div>
            <h1>People: </h1>
            {peopleData && <p>Name: {peopleData.name}</p>}
        </div>
    )
}
