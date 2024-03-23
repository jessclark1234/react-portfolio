import React from 'react';
export default function Contact() {
    return (
        <section class='page' id='contactPage'>
            <h2 class='title' id='contactTitle'>Hey you should contact me!</h2>
            <form class='form' id='contact-form'>
                <ul class='formArea' id='formArea'>
                    <li class='infoArea' id='nameArea'>
                        <label class='label' id='nameLabel'>Name:</label>
                        <input class='input' id='nameInput'></input>
                    </li>
                    <li class='infoArea' id='emailArea'>
                        <label class='label' id='emailLabel'>Email:</label>
                        <input class='input' id='emailInput'></input>
                    </li>
                    <li class='infoArea' id='timeArea'>
                        <label class='label' id='timeLabel'>Best time to reach you:</label>
                        <input class='input' id='timeInput'></input>
                    </li>
                    <li class='infoArea' id='discussArea'>
                        <label class='label' id='discussLabel'>What you'd like to discuss:</label>
                        <input class='input' id='discussInput'></input>
                    </li>
                </ul>
                <button class='button' id='formBtn'>Send</button>
            </form>
        </section>
    );
};