import styled from "styled-components";

export const Header = styled.header`
    background: white;
    position: sticky;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`
export const NavWrapper = styled.ul`
    display: flex;
    list-style: none;
`
export const NavLinkWrapper = styled.li`
    padding-left: 30px;
`

export const NavLink = styled.a`
    color: #171C21;
    text-decoration: none;
    padding: 10px 25px;
    border-radius: 3px;
    text-align: center;
    position: relative;
    opacity: 0.6;
    transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    font-weight: 600;
    &:before {
        content: "";
        background: rgba(23, 28, 33, 0.1);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        transform: scaleY(0%);
        transition: all 0.3s cubic-bezier(0.300, 0.07, 0.55, 0.95);
        right: 0;
    }
    &:hover:before {
        transform: scaleY(100%);
    }
    &:hover {
        opacity: 1;
    }
`

export const Logo = styled.img`
    width: 100px;
`