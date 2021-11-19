import React from 'react'
import { Link } from '@reach/router';

export default function Home(props) {
    return (
        <div>
            <h2>Welcome to the home page.</h2>
            <br />
            <Link to="/hello">Hello Page</Link>
            <br/>
            <Link to="/hello/blue/red">BlueRed</Link>
            <br/>
            <Link to="/4">Number</Link>
        </div>
    )
}
