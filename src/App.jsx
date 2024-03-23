import { useState } from 'react';
import React from 'react';
import Header from './components/pages/Header';
import NavTabs from './components/NavTab';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


export default function App() {
    const [currentPage, setCurrentPage] = useState('Homepage');

    const showPage = () => {
        if (currentPage === "Homepage") {
            return <Homepage />;
        }
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Projects") {
            return <Projects />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    };

    const pageChange = (page) => setCurrentPage(page);

    return (
        <section>
            <Header />
            <NavTabs currentPage={currentPage} pageChange={pageChange} />
            <main className='main'>{showPage()}</main>
        </section>
    );
}
