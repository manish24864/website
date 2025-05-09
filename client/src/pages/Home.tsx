import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import Projects from '@/components/Projects';
import Workshops from '@/components/Workshops';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Manish Pandey | Physics Researcher</title>
        <meta name="description" content="Personal portfolio of Manish Pandey, a physics researcher specializing in plasma physics, quantum computing, and space science." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Manish Pandey | Physics Researcher" />
        <meta property="og:description" content="Personal portfolio of Manish Pandey, a physics researcher specializing in plasma physics, quantum computing, and space science." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manishpandey.com" />
      </Helmet>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Projects />
        <Workshops />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
