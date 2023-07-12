import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Menu() {
    return (
        <>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt4'>What is GPT?</a></p>
            <p><a href='#possibility'>Open AI</a></p>
            <p><a href='#features'>Case Studies</a></p>
            <p><a href='#blog'>Library</a></p>
        </>
    );
};

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='navbarContainer'>
            <div className='navbarLinksContainer'>
                <div className='navbarLogo'>
                    <p>GPT-4</p>
                </div>
                <div className='navbarLinks'>
                    <Menu />
                </div>
            </div>
            <div className='navbarSignIn'>
                <p>Sign In</p>
                <button>Sign Up</button>
            </div>
            <div className='navbarMenu'>
                {toggleMenu 
                    ? <RiCloseLine color='#fff' size={27} onClick={ () => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={ () => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <nav className='navbarMenuContainer scale-up-center'>
                        <div className='navbarMenuContainerLinks'>
                            <Menu />
                            <div className='navbarMenuContainerLinksSign'>
                                <p>Sign In</p>
                                <button>Sign Up</button>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </nav>
    )
}

export default Navbar;