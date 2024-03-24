import React from 'react';
export default function Projects() {
    return (
        <section className='page' id='projectPage'>
            <h2 className='title' id='projectTitle'>Check out some of my projects</h2>
                <ul id='portfolio'>
                    <li>
                        <a className='link' id='weatherLink' href='https://jessclark1234.github.io/weather-api-app/'><img className='img' id='weatherImg' src='./assets/projectPhotos/weatherAPI.png' alt='5 Day Weather API'></img></a>
                    </li>
                    <li>
                        <a className='link' id='readmeLink' href='https://github.com/jessclark1234/generate-README'><img className='img' id='readmeImg' src='./assets/projectPhotos/generateREADME.png' alt='Generate README.md'></img></a>
                    </li>
                    <li>
                        <a className='link' id='quizLink' href='https://jessclark1234.github.io/javascript-quiz/'><img className='img' id='quizImg' src='./assets/projectPhotos/javascriptQuiz.png' alt='JavaScript Skincare Quiz'></img></a>
                    </li>
                    <li>
                        <a className='link' id='staticLink' href='https://jessclark1234.github.io/static-portfolio/'><img className='img' id='staticImg' src='./assets/projectPhotos/static-portfolio.png' alt='First Static Portfolio'></img></a>
                    </li>
                </ul>

        </section>
    );
};