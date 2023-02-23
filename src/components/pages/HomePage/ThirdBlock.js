import React from "react";
import { LeftAlignSection, HalfWidth, SubTitle, TitleDescription, StyledLink, HalfWidthInner } from "../../GlobalStyles.style";

const ThirdBlock = () => {
  return (
    <LeftAlignSection>
        <HalfWidth>
            <SubTitle>Build the Wildest Web Projects with Confidence</SubTitle>
            <TitleDescription>Are you looking to bring your web ambitions to life? Look no further! I am here to help awesome people like you build the most daring and accessible web projects. Whether your ideas are unconventional or cutting-edge, I will be by your side to make them a reality.</TitleDescription>
        </HalfWidth>
        <HalfWidth>
          <HalfWidthInner>
            <StyledLink href='/'>WordPress Development</StyledLink>
            <StyledLink href='/'>React Development</StyledLink>
            <StyledLink href='/'>Website Maintenance & Support</StyledLink>
          </HalfWidthInner>
        </HalfWidth>
    </LeftAlignSection>
  )
}

export default ThirdBlock