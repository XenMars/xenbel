import React from "react";
import { RightAlignSection, HalfWidth, SubTitle, TitleDescription, StyledLink } from "../../GlobalStyles.style";

const SecondBlock = (props, context) => {
    return (
        <RightAlignSection>
            <HalfWidth></HalfWidth>
            <HalfWidth>
                <SubTitle>Let's work together.</SubTitle>
                <TitleDescription> With a wealth of knowledge and expertise in the latest technologies and best practices in website development, I has a proven track record of delivering high-quality websites that meet clients' requirements. My goal is to help businesses succeed online by providing them with the best possible solutions.</TitleDescription>
                <StyledLink href="/">About my approach</StyledLink>
            </HalfWidth>
        </RightAlignSection>
    );
}

export default SecondBlock;