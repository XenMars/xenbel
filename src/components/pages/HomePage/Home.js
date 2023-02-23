import React from 'react';
import { GlobalStyles } from '../../GlobalStyles.style';
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';
import ThirdBlock from './ThirdBlock';
import CardsBlock from './CardsBlock';

const Home = () => {
    return (
    <>
        <GlobalStyles/>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <CardsBlock />
    </>
)
}

export default Home;

