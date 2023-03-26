import React from 'react'
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div id='aboutus-page'>
            Welcome to About Us Page<br />
            <Link to={"/"}> <button>Go back</button></Link>
        </div>
    )
}
export default AboutUs;