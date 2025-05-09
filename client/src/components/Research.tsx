import { motion } from 'framer-motion';
import { MaterialIcon } from '@/lib/icons';
import plasmaImg from '@assets/plasma.png';
import gnssImg from '@assets/gnss.png';

export default function Research() {
  const researchItems = [
    {
      title: "Plasma Physics Research",
      institution: "Khwopa College of Engineering, Bhaktpur",
      period: "August 2024 - Present",
      description: [
        "Conducting research on plasma generation, focusing on its electrical and optical characterization.",
        "Engaged in experimental studies to analyze plasma properties and optimize generation techniques.",
        "Exploring practical applications of plasma technology in various scientific and engineering fields."
      ],
      icon: "bolt",
      image: plasmaImg,
      imageAlt: "Purple plasma discharge glowing in a laboratory setup"
    },
    {
      title: "Quantum Computing Research",
      institution: "The Coding School",
      period: "January 2025 - April 2025", 
      description: [
        "Completed a 100-hour introductory course covering quantum gates, circuits, algorithms, and hands-on programming simulations.",
        "Applied theoretical knowledge to develop quantum computing simulations using platforms like Google Colab."
      ],
      icon: "memory",
      image: null,
      imageAlt: "Quantum computing hardware"
    },
    {
      title: "GNSS Data Analysis",
      institution: "Nepal Academy of Science and Technology (NAST)",
      period: "January 2025 - February 2025",
      description: [
        "Completed a workshop on GNSS data logging, correction techniques, and high-precision positioning.",
        "Applied geodesic computation and GNSS correction techniques to enhance positional accuracy and motion analysis."
      ],
      icon: "satellite_alt",
      image: gnssImg,
      imageAlt: "Diagram showing different GNSS satellite systems orbiting around Earth"
    }
  ];

  return (
    <section id="research" className="section-padding bg-neutral-100">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Research Experience</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            My journey through experimental physics research and academic exploration.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary bg-opacity-30 transform md:translate-x-px"></div>
            
            {researchItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative mb-20 md:mb-16 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-start">
                  <div className={`flex-1 md:pr-10 ${index % 2 === 0 ? 'md:text-right order-2 md:order-1' : 'md:text-left order-2'} mt-4 md:mt-0`}>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-neutral-600 mb-1">{item.institution}</p>
                    <p className="text-sm text-neutral-500 mb-4">{item.period}</p>
                    {item.description.map((paragraph, i) => (
                      <p key={i} className="text-neutral-700 mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  <div className="md:w-16 w-full flex justify-center order-1 md:order-2">
                    <div className="w-10 h-10 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center z-10">
                      <MaterialIcon name={item.icon} className="text-white text-sm" />
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-10 order-3' : 'md:pr-10 order-3'} mt-4 md:mt-0`}>
                    {item.image && (
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={item.image} 
                          alt={item.imageAlt} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    )}
                    {!item.image && (
                      <div className="rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-primary to-secondary h-48 flex items-center justify-center">
                        <MaterialIcon name={item.icon} className="text-white text-5xl" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
