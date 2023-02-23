import React from 'react';
import styled from 'styled-components'
import PCFaceTyped from './PCFaceTyped'
import Hello from './img/Hello.webp'

const HelloAnim = () => {
    return (
        <HelloAnimWrapper>
            <HelloAnimPic src={Hello} />
            <PCFaceTyped />
        </HelloAnimWrapper>
    )
}

export default HelloAnim 

export const HelloAnimWrapper = styled.div`
    position: relative;
`

export const HelloAnimPic = styled.img`
    width: 500px;
`
