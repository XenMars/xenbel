import React from "react";
import logo from './logo.svg'
import { Header, Nav, NavLink, NavWrapper, NavLinkWrapper, Logo } from "./Navbar.elements";

export const Navbar = () => {
    return (
        <Header>
            <Nav>
                <a href="/"><Logo src={logo} className='header-logo' alt='logo' /></a>
                <NavWrapper>
                    <NavLinkWrapper>
                        <NavLink href="/">Services</NavLink>
                    </NavLinkWrapper>
                    <NavLinkWrapper>
                        <NavLink href="/">Work</NavLink>
                    </NavLinkWrapper>
                    <NavLinkWrapper>
                        <NavLink href="/">Blog</NavLink>
                    </NavLinkWrapper>
                    <NavLinkWrapper>
                        <NavLink href="/">About</NavLink>
                    </NavLinkWrapper>
                    <NavLinkWrapper>
                        <NavLink href="/">Contacts</NavLink>
                    </NavLinkWrapper>
                </NavWrapper>
            </Nav>
        </Header>
    )
}