import React from 'react'
import { Link } from '@reach/router';

export default function Home(props) {
    return (
        <div>
            <h2>Welcome to my React App!</h2>
            <br/>
            <Link to="/">Home Page</Link>
        </div>
    )
}
