import { createGlobalStyle } from "styled-components";
import styled, { keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: white;
        max-width: 1280px;
        margin: auto;
        padding: 0 10px;
        color: #111417;
        font-family: 'Work Sans', sans-serif;
    }

    .type-wrapPC {
        font-family: 'DotGothic16', sans-serif;
        color: #10C800;
        position: absolute;
        top: 157px;
        left: 150px;
        font-size: 35px;
    }

    
`

const ButtonAnimation = keyframes`
to {background-position: 200%;}
`

export const Button = styled.button`
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #10C800;
    transition: .4s;
    border: solid 2px rgba(16, 200, 0, 1);
    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
    background: linear-gradient(135deg, transparent 65%, rgba(16, 200, 0, 0.3) 65%, transparent 70%);
    background-size: 2000%;
    background-position: 0%;
    transition: box-shadow 350ms, color 400ms;
    animation: ${ButtonAnimation} 10s linear infinite;
    &:hover {
        box-shadow:
        inset -5em 0em 0 rgba(16, 200, 0, 1),
        inset 5em 0em 0 rgba(16, 200, 0, 1);
        color: #fff;
    }
`

export const SimpleLink = styled.a`
    color: #333333;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    transition: color .4s;
    &::before {
        content: "";
        width: 0;
        height: 3px;
        position: absolute;
        bottom: -3px;
        left: 0;
        border-radius: 3px;
        background: #10C800;
        transition: width .4s;
    }
    &:hover {
        color: #10C800;
    }
    &:hover:before {
        width: 100%;
    }
` 

export const TitleDescription = styled.p`
    font-size: 18px;
    font-weight: 500;
    opacity: 0.8;
`

export const StyledLink = styled.a`
    color: #111417;
    font-weight: 900;
    text-decoration: none;
    opacity: 0.8;
    font-size: 24px;
    margin: 15px 0;
    transition: all 0.3s ease-in-out;
    position: relative;
    &:after {
        content: "";
        width: 100%;
        height: 3px;
        background: #10C800;
        position: absolute;
        bottom: -3px;
        right: 0;
        left: -10px;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }
    &:hover {
        opacity: 1;
        color: #10C800;
    }

    &:hover:after {
        left: 0;
        opacity: 1;
    }
`

export const LeftAlignSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 100px 0;
    text-align: left;
`

export const RightAlignSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 100px 0;
    text-align: right;
`

export const SingleSection = styled.section`
    text-align: left;
    margin: 100px 0;
`

export const HalfWidth = styled.div`
    justify-self: center;
`

export const HalfWidthInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
`

export const SubTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
`

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
    opacity: 0.7;
    margin: 0;
`
