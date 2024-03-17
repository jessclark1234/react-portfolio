import { useState } from 'react';
import NavTabs from './NavTab';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
            <NavTabs currentPage={currentPage} pageChange={pageChange} />
            <main className='main?'>{showPage}</main>
        </section>
    );
}
