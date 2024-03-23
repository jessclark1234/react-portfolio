import PDF from '../../JessicaClarkResume.pdf'
import React from 'react';
export default function Resume() {
    return (
        <section class='page' id='resumePage'>
            <h2 class='title' id='resumeTitle'>Woah, hey there!</h2>
            <h3 class='txt' id='resumeTxt'>I think it would be really cool if you hired me! Here's my resume!</h3>
            <a href={PDF} download><button class='button' id='resumebtn'>Download this guy</button></a>
        </section>
    );
};