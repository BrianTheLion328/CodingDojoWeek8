import React from 'react'
import { Link } from '@reach/router';

export default function Number() {
    return (
        <div>
            <h2>The number is: 4</h2>
            <br />
            <Link to="/">Home Page</Link>
            <br/>
            <Link to="/hello">Hello Page</Link>
            <br/>
            <Link to="/hello/blue/red">BlueRed</Link>
        </div>
    )
}
