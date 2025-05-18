import { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
  onResumeClick: () => void;
}

const Navbar = ({ onResumeClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white/80'} py-4 px-6 z-40 transition-all duration-300`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <a 
            href="#home" 
            className="text-2xl font-bold text-primary font-poppins"
            onClick={(e) => {
              e.preventDefault();
              handleNavLinkClick('home');
            }}
          >
            Isha<span className="text-secondary">.</span>
          </a>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className="font-medium underline-animation"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/IshaGusain2004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors" 
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/isha-gusain-411a0a263/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors" 
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <Button 
            onClick={onResumeClick}
            className="bg-primary hover:bg-secondary text-white transition-colors"
          >
            Resume
          </Button>
        </div>
        
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="flex flex-col py-4 px-6 space-y-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className="font-medium py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
