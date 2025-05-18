import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import { setActiveNavLink } from '@/lib/utils';

const Home = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setResumeModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeResumeModal = () => {
    setResumeModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Set active nav link based on scroll position
  useEffect(() => {
    window.addEventListener('scroll', setActiveNavLink);
    return () => {
      window.removeEventListener('scroll', setActiveNavLink);
    };
  }, []);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeResumeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <>
      <Navbar onResumeClick={openResumeModal} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      
      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={closeResumeModal}
      />
    </>
  );
};

export default Home;
