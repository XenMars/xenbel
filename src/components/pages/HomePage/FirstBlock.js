import React from "react";
import { LeftAlignSection, HalfWidth, Title, TitleDescription, Button, Name } from "../../GlobalStyles.style";
import HelloAnim from "./HelloAnim";

const FirstBlock = () => {
    return (
        <LeftAlignSection>
            <HalfWidth>
                <Name>Xen Beliaeva</Name>
                <Title>WordPress & FrontEnd Developer</Title>
                <TitleDescription>
                I collaborate with innovative individuals to develop and create engaging, user-friendly websites and products. With over five years of experience in web development, I am dedicated to enhancing the online world.
                </TitleDescription>
                <Button>contact me</Button>
            </HalfWidth>
            <HalfWidth>
                <HelloAnim />
            </HalfWidth>
        </LeftAlignSection>
    )
}

export default FirstBlock;