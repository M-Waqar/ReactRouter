import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();

    console.log(location);
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">Application</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/Page1">Page1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/Page2">Page2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/Page3">Page3</NavLink>
                    </li>
                </ul>
            </div>
            </nav>
        </>
    )
}

export default Layout;
