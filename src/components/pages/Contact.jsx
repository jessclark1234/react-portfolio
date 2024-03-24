import React from 'react';
export default function Contact() {
    return (
        <section className='page' id='contactPage'>
            <h2 className='title' id='contactTitle'>Hey you should contact me!</h2>
            <form className='form' id='contact-form'>
                <ul className='formArea' id='formArea'>
                    <li className='infoArea' id='nameArea'>
                        <label className='label' id='nameLabel'>Name:</label>
                        <input className='input' id='nameInput'></input>
                    </li>
                    <li className='infoArea' id='emailArea'>
                        <label className='label' id='emailLabel'>Email:</label>
                        <input className='input' id='emailInput'></input>
                    </li>
                    <li className='infoArea' id='timeArea'>
                        <label className='label' id='timeLabel'>Best time to reach you:</label>
                        <input className='input' id='timeInput'></input>
                    </li>
                    <li className='infoArea' id='discussArea'>
                        <label className='label' id='discussLabel'>What you'd like to discuss:</label>
                        <input className='input' id='discussInput'></input>
                    </li>
                </ul>
                <button className='button' id='formBtn'>Send</button>
            </form>
        </section>
    );
};