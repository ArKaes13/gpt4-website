import React from 'react';
import vrHeadset from '../images/vrHeadset.png';

function OpenAI() {
    return (
        <section id='openAI'>
            <div className='openAIImage'>
                <img src={vrHeadset} alt='woman with vr headset' />
            </div>
            <div className='openAIContent'>
                <h1 className='gradient_text'>Open AI</h1>
                <p>OpenAI is an American artificial intelligence (AI) research laboratory consisting of the non-profit OpenAI Incorporated and its for-profit subsidiary corporation OpenAI Limited Partnership. OpenAI conducts AI research with the declared intention of developing "safe and beneficial" artificial general intelligence, which it defines as "highly autonomous systems that outperform humans at most economically valuable work".</p>
                <h4>Request Early Access to get started</h4>
            </div>
        </section>
    );
};

export default OpenAI;