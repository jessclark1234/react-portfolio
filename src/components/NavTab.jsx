import React from 'react';
function NavTab({ currentPage, pageChange}) {
    return (
        <nav class='navtab'>
            <ul class='navBar'>
                <li class='navlink' id='navHome'>
                <a href="#homepage" onClick={() => pageChange('Homepage')} className={currentPage === 'Homepage' ? 'nav-link active':'nav-link'}>Homepage</a>
                </li>
                <li class='navLink' id='navAbout'>
                <a href="#about" onClick={() => pageChange('About')} className={currentPage === 'About' ? 'nav-link active':'nav-link'}>About Me</a>
                </li>
                <li class='navLink' id='navProject'>
                <a href="#project" onClick={() => pageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active':'nav-link'}>View my portfolio</a>
                </li>
                <li class='navLink' id='navContact'>
                <a href="#contact" onClick={() => pageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active':'nav-link'}>Contact</a>
                </li>
                <li class='navLink' id='navResume'>
                <a href="#resume" onClick={() => pageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active':'nav-link'}>View my resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;