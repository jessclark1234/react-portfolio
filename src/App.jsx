import { useState } from 'react';
import NavTabs from './NavTab';
import Homepage from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
        // if (currentPage === "Homepage") {
        //     return <Homepage />;
        // }
    };

    const pageChange = (page) => setCurrentPage(page);

    return (
        <section>
            <NavTabs currentPage={currentPage} pageChange={pageChange} />
            <main className='main?'>{showPage}</main>
        </section>
    );
}
