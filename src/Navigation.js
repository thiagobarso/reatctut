import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link to="/" className="nav-link text-white">
                            Home
                        </Link>
                        <Link to="/department" className="nav-link text-white">
                            Department
                        </Link>
                        <Link to="/employee" className="nav-link text-white">
                            Employee
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}