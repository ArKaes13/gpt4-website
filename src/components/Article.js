import React from 'react';

function Article(props) {
    return (
        <article className='articleContainer'>
            <div className='articleImage'>
                <img src={props.imgURL} alt='blog image' />
            </div>
            <div className='articleContent'>
                <div>
                    <p>{props.date}</p>
                    <h3>{props.title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </article>
    );
};

export default Article;