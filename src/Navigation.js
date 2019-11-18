import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {NavLink as RRNavLink } from "react-router-dom";

const Example = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand tag={RRNavLink} to="/" className="mr-auto">PetCare</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-md-3" navbar>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/food_toxicity" activeClassName="active">Food Toxicity</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} exact to="/calendar" activeClassName="active">Calendar</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Example;
