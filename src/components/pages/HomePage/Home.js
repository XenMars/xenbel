import React from 'react';
import HomePageTyped from './HomePageTyped';
import { GlobalStyles, TitleDescriotion, StyledLink, SubTitle, FlexWrapper, TwoColumnsBlock, ColumnLeft, ColumnRight, Button,
SingleColumnBlock } from '../../GlobalStyles.style';
import { Name, IntroWrapper } from './HomePage.elements';
import { PortfolioItem } from './HomePage.components';

const Home = () => {
    return (
    <>
        <GlobalStyles/>
        <IntroWrapper>
            <Name>Xen Beliaeva</Name>
            <HomePageTyped />
            <TitleDescriotion>
                I collaborate with innovative individuals to develop and create engaging, user-friendly websites and products. With over five years of experience in web development, I am dedicated to enhancing the online world.
            </TitleDescriotion>
            <FlexWrapper>
                <Button>Contact Me</Button>
            </FlexWrapper>
        </IntroWrapper>
        <TwoColumnsBlock>
            <ColumnLeft>
            </ColumnLeft>
            <ColumnLeft>
                <SubTitle>Let's work together.</SubTitle>
                <TitleDescriotion>
                    With a wealth of knowledge and expertise in the latest technologies and best practices in website development, I has a proven track record of delivering high-quality websites that meet clients' requirements. My goal is to help businesses succeed online by providing them with the best possible solutions.
                </TitleDescriotion>
                <StyledLink href='/'>About my approach</StyledLink>
            </ColumnLeft>
        </TwoColumnsBlock>
        <TwoColumnsBlock>
            <ColumnRight>
                <SubTitle>Build the Wildest Web Projects with Confidence</SubTitle>
                <TitleDescriotion>Are you looking to bring your web ambitions to life? Look no further! I am here to help awesome people like you build the most daring and accessible web projects. Whether your ideas are unconventional or cutting-edge, I will be by your side to make them a reality.</TitleDescriotion>
            </ColumnRight>
            <ColumnRight>
                <StyledLink href='/'>WordPress Development</StyledLink>
                <StyledLink href='/'>React Development</StyledLink>
                <StyledLink href='/'>Website Maintenance & Support</StyledLink>
            </ColumnRight>
        </TwoColumnsBlock>
        <SingleColumnBlock>
            <SubTitle>Open Source</SubTitle>
            <PortfolioItem></PortfolioItem>
        </SingleColumnBlock>
    </>
)
}

export default Home;

