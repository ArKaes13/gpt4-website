import React from 'react';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Brand from './Brand.js';
import WhatGPT4 from './WhatGPT4.js';

function App() {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar />
                <Header />
                </div>
            <Brand />
            <WhatGPT4 />
            {/* <Possibility />
            <CTA />
            <Blog />
            <Footer /> */}
        </div>
    )
}

export default App;