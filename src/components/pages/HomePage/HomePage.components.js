import React from 'react';
import styled, { keyframes } from 'styled-components'
import { SimpleLink } from '../../GlobalStyles.style';


const PortfolioItem = () => {
    return (
        <CardWrapper>
        <Card>
            <CardFront>
                <CardContentFront>
                    <p>Like System plugin for WordPress</p>
                </CardContentFront>
            </CardFront>
            <CardBack>
                <CardContent>
                    <p>Short description for a plugin description for a plugin short for a plugin</p>
                    <SimpleLink href='/'>Get sourse code</SimpleLink>
                </CardContent>
            </CardBack>
        </Card>
        <Card>
            <CardFront>
                <CardContentFront>
                    <p>Display count orders notes Woocomerce plugin</p>
                </CardContentFront>
            </CardFront>
            <CardBack>
                <CardContent>
                    <p>Short description for a plugin description for a plugin short for a plugin</p>
                    <SimpleLink href='/'>Get sourse code</SimpleLink>
                </CardContent>
            </CardBack>
        </Card>
        <Card>
            <CardFront>
                <CardContentFront>
                    <p>Styled 3d cards with JS and SASS</p>
                </CardContentFront>
            </CardFront>
            <CardBack>
                <CardContent>
                    <p>Short description for a plugin description for a plugin short for a plugin</p>
                    <SimpleLink href='/'>Get sourse code</SimpleLink>
                </CardContent>
            </CardBack>
        </Card>
        </CardWrapper>
    )
}


export { PortfolioItem }

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-content: center;
    gap: 20px;
    padding: 50px 0;
`

export const CardFront = styled.div`
    width: 300px;
    height: 200px;
    transition: 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: #333333;
    transition: .7s;
    transform: translateY(100px);
    border-radius: 5px;
`
export const CardBack = styled.div`
    width: 300px;
    height: 190px;
    transition: 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transition: .8s;
    transform: translateY(-95px);
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    &:after {
        content: "";
        position: absolute;
        width: 30px;
        height: 4px;
        bottom: 15px;
        left: 50%;
        left: 50%;
        transform: translateX(-50%);
        background: #10C800;
    }
`
export const Card = styled.div`
    height: 400px;
    margin: auto;
    &:hover ${CardFront} {
        transform: translateY(0);
        border-radius: 5px 5px 0 0;
        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    }
    &:hover ${CardBack} {
        transform: translateY(0);
        border-radius: 0 0 5px 5px;
    }
`

export const CardContentFront = styled.div`
    color: #fff;
    font-weight: 600;
    padding: 20px;
    text-align: center;
`

export const CardContent = styled.div`
    background: #fff;
    color: black;
`

export const TechTable = styled.div`
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3, 120px);
    width: 100%;
`

export const TechTableFigure = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    outline: 1px dashed #EDEDED;
    overflow: hidden;
`

const pulseAnimation = keyframes`
 0% { opacity: 0.3; filter: grayscale(1); }
 50% { opacity: 1; filter: grayscale(0); }
 100% { opacity: 0.3; filter: grayscale(1); }
`

export const TechTableImgOpacity = styled.img`
    animation: ${pulseAnimation} 4s ease infinite reverse;
    animation-delay: 1.5s;
    max-width: 100%;
    opacity: 1;
`

export const TechTableImg = styled.img`
    animation: ${pulseAnimation} 4s ease infinite;
    max-width: 100%;
    opacity: 1;
`

