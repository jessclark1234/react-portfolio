import PDF from '../../JessicaClarkResume.pdf'
import React from 'react';
export default function Resume() {
    return (
        <section className='page' id='resumePage'>
            <h2 className='title' id='resumeTitle'>Woah, hey there!</h2>
            <h3 className='txt' id='resumeTxt'>I think it would be really cool if you hired me! Here's my resume!</h3>
            <a href={PDF} download><button className='button' id='resumeBtn'>Download this guy</button></a>
        </section>
    );
};