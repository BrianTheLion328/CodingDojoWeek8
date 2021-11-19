import React from 'react'
import { Link } from '@reach/router';

export default function Hello() {
    return (
        <div>
            <h2>The word is: hello</h2>
            <br />
            <Link to="/">Home Page</Link>
            <br/>
            <Link to="/hello/blue/red">BlueRed</Link>
            <br/>
            <Link to="/4">Number</Link>
        </div>
    )
}
