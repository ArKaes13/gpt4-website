import React from 'react';
import Feature from './Feature.js';

function Functions() {
    return (
        <section id='functions'>
            <div className='functionsHeading'>
                <h1 className='gradient_text'>The future is now and you just need to realize it. Step into the future today & make it happen.</h1>
                <p>Request Early Access to get started</p>
            </div>
            <div className='functionsContainer'>
                <Feature 
                    title='Complex Inputs'
                    text="One of GPT-4's biggest new features is its ability to understand more complex and nuanced prompts."
                />
                <Feature 
                    title='Multimodal Capabilities'
                    text="The previous version of ChatGPT was limited to just text prompts. In contrast, one of GPT-4's newest features is its multimodal capabilities. The model can accept both text and image prompts."
                />
                <Feature 
                    title='Greater Steerability'
                    text="OpenAI also claims that GPT-4 has a high degree of steerability. It has also made it harder for the AI to break character, meaning it's less likely to fail when implemented in an app to play a certain character."
                />
                <Feature 
                    title='Performance Improvements'
                    text="Outside of evaluating the model's performance on human exams, OpenAI also evaluated the bot on traditional benchmarks designed for machine learning models."
                />
            </div>
        </section>
    );
};

export default Functions;