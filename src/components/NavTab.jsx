import React from 'react';
function NavTab({ currentPage, pageChange}) {
    return (
        <nav>
            <ul>
                <li>
                <a href="#homepage" onClick={() => pageChange('Homepage')} className={currentPage === 'Homepage' ? 'nav-link active':'nav-link'}>Homepage</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#about" onClick={() => pageChange('About')} className={currentPage === 'About' ? 'nav-link active':'nav-link'}>About Me</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#project" onClick={() => pageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active':'nav-link'}>View my portfolio</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#contact" onClick={() => pageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active':'nav-link'}>Contact</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#resume" onClick={() => pageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active':'nav-link'}>View my resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;