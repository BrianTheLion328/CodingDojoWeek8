import React from 'react'
import { Link } from '@reach/router';

export default function BlueRed() {
    return (
        <div>
            <h2 style={{backgroundColor: "pink", color: "blue"}}>The word is: hello</h2>
            <br />
            <Link to="/">Home Page</Link>
            <br/>
            <Link to="/hello">Hello Page</Link>
            <br/>
            <Link to="/4">Number</Link>
        </div>
    )
}
