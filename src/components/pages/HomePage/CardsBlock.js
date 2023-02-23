import React from "react";
import { SingleSection, SubTitle } from "../../GlobalStyles.style";
import PortfolioCards from "./PortfolioCards";

const CardsBlock = () => {
    return (
        <SingleSection>
            <SubTitle>Open Source</SubTitle>
            <PortfolioCards />
        </SingleSection>
    );
}

export default CardsBlock;