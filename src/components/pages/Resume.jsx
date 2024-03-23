import PDF from '../../JessicaClarkResume.pdf'
import React from 'react';
export default function Resume() {
    return (
        <section>
            <h2>Woah, hey there!</h2>
            <h3>I think it would be really cool if you hired me! Here's my resume!</h3>
            <a href={PDF} download><button>Download this guy</button></a>
            
        </section>
    );
};