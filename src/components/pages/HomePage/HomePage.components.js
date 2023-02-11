import React from 'react';
import styled, { keyframes } from 'styled-components'
import ReactLogo from './img/ReactLogo.svg'
import JavaScriptLogo from './img/JavaScriptLogo.svg'
import PHPLogo from './img/PHPLogo.svg'
import JQueryLogo from './img/JQueryLogo.svg'
import HTMLLogo from './img/HTMLLogo.svg'
import SASSLogo from './img/SASSLogo.svg'
import WPLogo from './img/WPLogo.svg'
import StyledComponentsLogo from './img/StyledComponentsLogo.svg'
import MySQLLogo from './img/MySQLLogo.svg'

const Pulse = () => {
    return (
        <TechTable>
            <TechTableFigure>
                <TechTableImgOpacity src={ReactLogo} alt='React.js' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImg src={JavaScriptLogo} alt='JavaScript' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImgOpacity src={PHPLogo} alt='PHP' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImg src={JQueryLogo} alt='JQuery' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImgOpacity src={HTMLLogo} alt='HTML' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImg src={SASSLogo} alt='SASS' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImgOpacity src={WPLogo} alt='WordPress' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImg src={StyledComponentsLogo} alt='StyledComponents' width="800" height="600"/>
            </TechTableFigure>
            <TechTableFigure>
                <TechTableImgOpacity src={MySQLLogo} alt='MySQL' width="800" height="600"/>
            </TechTableFigure>
        </TechTable>
    )
}

const PortfolioItem = () => {
    return (
        <Card>
            <CardFront>
                <CardContentFront>
                    <p>Наведи</p>
                </CardContentFront>
            </CardFront>
            <CardBack>
                <CardContent>
                    <p>ХОБА</p>
                </CardContent>
            </CardBack>
        </Card>
        
    )
}

export default Pulse  
export { PortfolioItem }

const pulseAnimation = keyframes`
 0% { opacity: 0.3; filter: grayscale(1); }
 50% { opacity: 1; filter: grayscale(0); }
 100% { opacity: 0.3; filter: grayscale(1); }
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
    background: #9747FF;
    transition: .7s;
    transform: translateY(100px);
`
export const CardBack = styled.div`
    width: 300px;
    height: 200px;
    transition: 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    transition: .8s;
    transform: translateY(-100px);
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
        background: #9747FF;
    }
`
export const Card = styled.div`
    margin: 100px 0;
    &:hover ${CardFront} {
        transform: translateY(0);
    }
    &:hover ${CardBack} {
        transform: translateY(0);
    }
`

export const CardContentFront = styled.div`
    background: #9747FF;
    color: #fff;
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