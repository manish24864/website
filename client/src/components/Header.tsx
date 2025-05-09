import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { MaterialIcon } from '@/lib/icons';

const navLinks = [
  { href: '#about', text: 'About' },
  { href: '#research', text: 'Research' },
  { href: '#publications', text: 'Publications' },
  { href: '#projects', text: 'Projects' },
  { href: '#workshops', text: 'Workshops' },
  { href: '#blog', text: 'Blog' },
  { href: '#contact', text: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
      scrolled ? 'py-2 shadow-md' : 'py-3'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="font-heading font-bold">MP</span>
            </div>
            <span className="text-primary font-heading font-semibold text-xl">Manish Pandey</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-neutral-800 hover:text-primary font-medium transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-neutral-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <MaterialIcon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden bg-white shadow-md"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="container-custom py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-neutral-800 hover:text-primary font-medium py-2 transition-colors"
              onClick={closeMenu}
            >
              {link.text}
            </a>
          ))}
          <a 
            href="#"
            className="inline-block text-white bg-primary hover:bg-primary-light rounded px-4 py-2 font-medium transition-colors text-center"
            onClick={(e) => {
              e.preventDefault();
              window.open('/Manish_Resume.pdf', '_blank');
              closeMenu();
            }}
            download
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </header>
  );
}
