import React from 'react';
import styled from 'styled-components'
import { SimpleLink } from '../../GlobalStyles.style';


const PortfolioCards= () => {
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


export default PortfolioCards

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
    color: #000;
`