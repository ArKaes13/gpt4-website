import React from 'react';
import people from '../images/people.png';
import ai from '../images/ai.png';

function Header() {
    return (
        <header id='home'>
            <div className='headerContent'>
                <h1 className='gradient_text'>
                    Let's build something amazing with GPT-4 OpenAI
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='headerInput'>
                    <input type='email' placeholder='Your email address'></input>
                    <button>Get Started</button>
                </div>
                <div className='headerPeople'>
                    <img src={people} alt='people' />
                    <p>1,600 people requested access to visit in the last 24hrs.</p>
                </div>
            </div>
            <div className='headerImage'>
                <img src={ai} alt='ai' />
            </div>
        </header>
    );
};

export default Header;