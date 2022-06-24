import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const logout = async () => {
        await fetch('http://127.0.0.1:8000/api/logout/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <div className="container-fluid">
                        <Link to="/frontend" className="navbar-brand">Home </Link>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link"> Login </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/register" className="nav-link"> Register </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/login" className="nav-link" onClick={logout}> Logout </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/frontend" className="nav-link">Frontend</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/backend" className="nav-link">Backend</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )
}
export default Header