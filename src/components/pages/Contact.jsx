import React from 'react';
export default function Contact() {
    return (
        <section>
            <h2>Hey you should contact me!</h2>
            <form>
                <ul>
                    <li>
                        <label>Name:</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Email:</label>
                        <input></input>
                    </li>
                    <li>
                        <label>Best time to reach you:</label>
                        <input></input>
                    </li>
                    <li>
                        <label>What you'd like to discuss:</label>
                        <input></input>
                    </li>
                </ul>
                <button>Send</button>
            </form>
        </section>
    );
}