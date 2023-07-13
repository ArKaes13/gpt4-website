import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Brand from './Brand.js';
import WhatGPT4 from './WhatGPT4.js';
import Functions from './Functions.js';
import OpenAI from './OpenAI.js';

function App() {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar />
                <Header />
                </div>
            <Brand />
            <WhatGPT4 />
            <Functions />
            <OpenAI />
            {/* <CTA />
            <Blog />
            <Footer /> */}
        </div>
    )
}

export default App;