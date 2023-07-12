import React from 'react';
import Feature from './Feature.js';

function WhatGPT4() {
    return (
        <section id='wgpt4'>
            <div className='whatgpt4FeatureTop'>
                <Feature 
                    title='What is GPT-4'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                />
            </div>
            <div className='whatgpt4Heading'>
                <h1 className='gradient_text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>Expore the Library</p>
            </div>
            <div className='whatgpt4FeatureBottom'>
                <Feature 
                    title='Chatbots'
                    text='Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ullamco laboris nisi ut aliquip ex ea commodo consequat'
                />
                <Feature 
                    title='Knowledgebase'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                />
                <Feature 
                    title='Education'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
            </div>
        </section>
    );
};

export default WhatGPT4;