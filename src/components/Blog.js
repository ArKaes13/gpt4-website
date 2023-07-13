import React from 'react';
import Article from './Article.js';
import blog01 from '../images/blog01.png';
import blog02 from '../images/blog02.png';
import blog03 from '../images/blog03.png';
import blog04 from '../images/blog04.png';
import blog05 from '../images/blog05.png';

function getDate() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();
    const day = date.getDay();
    const month = months[date.getMonth()]
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`
}

function Blog() {
    return (
        <section id='blog'>
            <div className='blogHeader'>
                <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className='blogContainer'>
                <div className='blogLarge'>
                    <Article imgURL={blog01} date={getDate()} title='Gpt-4 and OpenAI is the future. Let us explore why.'/>
                </div>
                <div className='blogQuad'>
                    <Article imgURL={blog02} date={getDate()} title='Benefits, Limits, and Risks of GPT-4 as an AI Chatbot for Medicine'/>
                    <Article imgURL={blog03} date={getDate()} title='OpenAI Plans to Up the Ante in Tech’s A.I. Race'/>
                    <Article imgURL={blog04} date={getDate()} title='5 jaw-dropping things GPT-4 can do that ChatGPT couldn’t'/>
                    <Article imgURL={blog05} date={getDate()} title='Harnessing GPT-4 for Writing Assistance and Content Creation'/>
                </div>
            </div>
        </section>
    );
};

export default Blog;