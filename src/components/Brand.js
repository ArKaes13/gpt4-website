import React from 'react';
import google from '../images/google.png';
import slack from '../images/slack.png';
import atlassian from '../images/atlassian.png';
import dropbox from '../images/dropbox.png';
import shopify from '../images/shopify.png';

function Brand() {
    return (
        <section className='brandContainer'>
            <div>
                <img src={google} alt='google' />
            </div>
            <div>
                <img src={slack} alt='slack' />
            </div>
            <div>
                <img src={atlassian} alt='atlassian' />
            </div>
            <div>
                <img src={dropbox} alt='dropbox' />
            </div>
            <div>
                <img src={shopify} alt='shopify' />
            </div>
        </section>
    );
};

export default Brand;