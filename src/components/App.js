import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';

function App() {
    return (
        <div classNmae='App'>
            <div className='gradient_bg'>
                <Navbar />
                <Header />
            </div>
            {/* <Brand />
            <WhatGPT4 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer /> */}
        </div>
    )
}

export default App;