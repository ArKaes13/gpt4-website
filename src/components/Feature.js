import React from 'react';

function Feature(props) {
    return (
        <div className='featureContainer'>
            <div className='featureTitle'>
                <div />
                <h1>{props.title}</h1>
            </div>
            <div className='featureText'>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default Feature;