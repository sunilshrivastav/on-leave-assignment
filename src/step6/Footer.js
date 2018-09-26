import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
    <div className="row">
        <div>
            <Link to="/">Home</Link>&nbsp;|&nbsp;
            <Link to="/login">Login</Link>&nbsp;|&nbsp;
            <Link to="/info">Information</Link>&nbsp;|&nbsp;
            <Link to="/admin">Admin</Link>
        </div>
        <p className="mt-5 mb-3 text-muted text-center">© Chinasoft International 2018, All rights are reserved.</p>
    </div>
)

export default Footer;