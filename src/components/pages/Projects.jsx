import React from 'react';
export default function Projects() {
    return (
        <section class='page' id='projectPage'>
            <h2 class='title' id='projectTitle'>Check out some of my projects</h2>
                <ul id='portfolio'>
                    <li>
                        <a class='link' id='weatherLink' href='https://jessclark1234.github.io/weather-api-app/'><img class='img' id='weatherImg' src='./assets/projectPhotos/weatherAPI.png' alt='5 Day Weather API'></img></a>
                        
                    </li>
                    <li>
                        <a class='link' id='readmeLink' href='https://github.com/jessclark1234/generate-README'><img class='img' id='readmeImg' src='./asstes/projectPhotos/generateREADME.png' alt='Generate README.md'></img></a>
                    </li>
                    <li>
                        <a class='link' id='quizLink' href='https://jessclark1234.github.io/javascript-quiz/'><img class='img' id='quizImg' src='./assets/projectPhotos/javascriptQuiz.png' alt='JavaScript Skincare Quiz'></img></a>
                    </li>
                    <li>
                        <a class='link' id='staticLink' href='https://jessclark1234.github.io/static-portfolio/'><img class='img' id='staticImg' src='./assets/projectPhotos/static-portfolio.png' alt='First Static Portfolio'></img></a>
                    </li>
                </ul>

        </section>
    );
};