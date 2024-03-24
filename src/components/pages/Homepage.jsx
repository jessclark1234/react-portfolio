import React from 'react';
export default function Homepage() {
    return (
        <section className='page' id='homePage'>
            <h2 className='title' id='homeTitle'>Welcome to my web development page!</h2>
            <img id='avatar' src='./assets/avatar/avatar.png'></img>
            <p className='description' id='homeDescription'>
                Here you will find my resume, a way to contact me, a little about me, and learn more about this site in general. Did you know this is my second portfolio? Wow, so cool. What was the first one? Just basic HTML and CSS. This one? Oh, nothing crazy. Just React.js along with some basic HTML and CSS. Wow she's really a developer.
            </p>
        </section>
    );
};