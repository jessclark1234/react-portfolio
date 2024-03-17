function NavTab({ currentPage, pageChange}) {
    return (
        <nav>
            <ul>
                <li>
                <a href="#homepage" onClick={() => pageChange('Homepage')} className={currentPage === 'Homepage'}>Homepage</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#about" onClick={() => pageChange('About')} className={currentPage === 'About'}>About Me</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#project" onClick={() => pageChange('Projects')} className={currentPage === 'Projects'}>View my portfolio</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#contact" onClick={() => pageChange('Contact')} className={currentPage === 'Contact'}>Contact</a>
                </li>
            </ul>
            <ul>
                <li>
                <a href="#resume" onClick={() => pageChange('Resume')} className={currentPage === 'Resume'}>View my resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;