import styled from "styled-components";

export const Button = styled.button`
    background: ${props => props.primary ? "linear-gradient(92.9deg, #D77700 0%, #C64700 100%)" : "transparent"} ;
    border: ${props => props.primary ? "none" : "2px dashed #D67500"} ;
    border-radius: 10px;

    &:hover {
        background: linear-gradient(92.9deg, #C64700 0%, #D77700 100%);
    }

    &:active {
        background: #000;
    }
`;