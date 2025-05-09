import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import plasmaImg from '@assets/plasma.png';
import gnssImg from '@assets/gnss.png';
import cubeImg from '@assets/cube.jpg';
import quantumEspressoImg from '@assets/quantum_espresso_logo.png';
import quantumComputingImg from '@assets/quantum_computing.png';

export default function Workshops() {
  const workshops = [
    {
      title: "Basics of Quantum ESPRESSO Workshop",
      date: "22 – 24 Apr 2025",
      location: "St. Xavier's College, Maitighar, Kathmandu",
      description: "Attended a focused workshop on the basics of Quantum ESPRESSO, covering electronic structure calculations, DFT, and hands-on simulations for materials modeling.",
      tags: ["Material Science", "DFT", "Computational Physics"],
      image: quantumEspressoImg,
      imageAlt: "Quantum ESPRESSO logo"
    },
    {
      title: "Quantum Computing Workshop",
      date: "10 – 12 Mar 2025",
      location: "Central Department of Physics, Tribhuwan University, Kirtipur, Kathmandu",
      description: "Participated in a hands-on workshop on quantum computing fundamentals, quantum algorithms, and programming using quantum simulation platforms.",
      tags: ["Quantum Computing", "Algorithms", "Quantum Simulation"],
      image: quantumComputingImg,
      imageAlt: "Quantum computing hardware showing complex circuitry and connections"
    },
    {
      title: "UTOKYO/ICG GNSS Training",
      date: "27 Jan - 01 Feb 2025",
      location: "Nepal Academy of Science and Technology (NAST), Khumaltar, Lalitpur",
      description: "Completed a workshop on GNSS data logging, correction techniques, and high-precision positioning.",
      tags: ["GNSS", "Positioning", "Geodesy"],
      image: gnssImg,
      imageAlt: "Diagram showing different GNSS satellite systems orbiting around Earth"
    },
    {
      title: "CubeSat Training",
      date: "16 - 20 Jan 2025",
      location: "Nepal Academy of Science and Technology (NAST), Khumaltar, Lalitpur",
      description: "Got hands-on experience with KiCad, Fusion 360, and CubeSat design and development.",
      tags: ["Satellite Design", "KiCad", "Fusion 360"],
      image: cubeImg,
      imageAlt: "Small CubeSat hardware with circuit boards in a transparent case with blue frames"
    },
    {
      title: "Workshop on Experimental Plasma Physics",
      date: "2 - 4 Aug 2024",
      location: "Central Department of Physics, Tribhuwan University, Kirtipur, Kathmandu",
      description: "Gained foundational knowledge in plasma physics, including the development of a low-cost plasma driver and its electrical and optical characterization.",
      tags: ["Plasma Physics", "Experimental Physics", "Optical Characterization"],
      image: plasmaImg,
      imageAlt: "Purple plasma discharge glowing in a laboratory setup"
    }
  ];

  return (
    <section id="workshops" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Workshops & Colloquia</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            Professional development through specialized training and academic events.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 md:mb-24 last:mb-0`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/3 mb-6 md:mb-0 md:px-8 flex justify-center">
                {workshop.image ? (
                  <img 
                    src={workshop.image} 
                    alt={workshop.imageAlt} 
                    className="mx-auto h-32 w-auto object-cover rounded-md"
                  />
                ) : (
                  <div className="w-32 h-32 bg-primary-dark rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="md:w-2/3">
                <div className="bg-neutral-50 p-6 md:p-8 rounded-xl shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
                    <span className="text-sm text-neutral-600">{workshop.date}</span>
                  </div>
                  <p className="text-neutral-600 mb-4">{workshop.location}</p>
                  <p className="text-neutral-700 mb-4">
                    {workshop.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-neutral-200 text-neutral-700 hover:bg-neutral-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
