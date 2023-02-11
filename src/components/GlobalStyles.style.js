import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: white;
        max-width: 1280px;
        margin: auto;
        padding: 0 10px;
        color: #111417;
    }

    .type-wrap {
        font-size: 68px;
        font-weight: 700;
    }

    
`

export const TitleDescriotion = styled.p`
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
        background: #9747FF;
        position: absolute;
        bottom: -3px;
        right: 0;
        left: -10px;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }
    &:hover {
        opacity: 1;
        color: #9747FF;
    }

    &:hover:after {
        left: 0;
        opacity: 1;
    }
`

export const Button = styled.button`

`

export const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const TwoColumnsBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 200px;
    gap: 5vw;
`

export const ColumnLeft = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
`

export const ColumnRight = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: right;
`

export const Title = styled.h1`
    font-size: 50px;
    font-weight: 700;
    text-align: right;
    margin: 0;
`

export const SubTitle = styled.h2`
    font-size: 50px;
    font-weight: 700;
    margin: 0;
`

export const SingleColumnBlock = styled.div`
    text-align: left;
`


