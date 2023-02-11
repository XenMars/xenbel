import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { GlobalStyles } from './GlobalStyles.style';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';

const App = () => {
    return (
        <Router>
            <GlobalStyles/>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    )
};



export default App;