import { motion } from 'framer-motion';
import { Link } from 'wouter';
import manishImg from '@assets/manish.jpg';
import Orbit from '@/components/ui/orbit';

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-neutral-100 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 lg:order-1 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-4">
              <span>Hi, I'm </span>
              <span className="gradient-text">Manish Pandey</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-neutral-700 font-semibold mb-6">Physics Researcher & Data Analyst</h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl">
              Exploring the fascinating intersections of theoretical physics, plasma physics, and 
              quantum computing. Currently pursuing my Bachelor of Science in Physics at St. Xavier's College,
              Tribhuvan University.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="inline-block text-white bg-primary hover:bg-primary-light rounded px-6 py-3 font-medium transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('/Manish_Resume.pdf', '_blank');
                }}
                className="inline-block text-primary border-2 border-primary hover:bg-primary hover:text-white rounded px-6 py-3 font-medium transition-colors"
                download
              >
                Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-physics-pattern rounded-full opacity-25 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-physics-pattern rounded-full opacity-25 z-0"></div>
              <img 
                src={manishImg} 
                alt="Manish Pandey standing near water" 
                className="rounded-lg shadow-lg w-64 md:w-80 h-auto z-10 relative"
              />
            </div>
            <Orbit />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
