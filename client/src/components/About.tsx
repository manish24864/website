import { motion } from 'framer-motion';
import { MaterialIcon } from '@/lib/icons';

export default function About() {
  const education = [
    {
      degree: "Bachelor of Science in Physics",
      institution: "St. Xavier's College, Tribhuvan University",
      period: "2022 – Present",
      location: "Kathmandu, Nepal"
    },
    {
      degree: "High School (Science Stream)",
      institution: "Radiant Secondary School",
      period: "2019-2021",
      location: "Mahendranagar, Kanchanpur"
    }
  ];

  const researchInterests = [
    {
      title: "Plasma Physics",
      icon: "bolt",
      description: "Plasma generation techniques, electrical and optical characterization, and practical applications in various scientific and engineering fields."
    },
    {
      title: "Quantum Computing",
      icon: "science",
      description: "Quantum gates, circuits, algorithms, and programming simulations using platforms like Google Colab."
    },
    {
      title: "Space Science",
      icon: "public",
      description: "Satellite systems, GNSS data analysis, geodesic computation, and space-environment interactions."
    },
    {
      title: "Theoretical Physics",
      icon: "psychology",
      description: "Quantum mechanics, particle physics, special relativity, and cosmology including dark energy and the Higgs Boson."
    }
  ];

  const skills = {
    programming: ["Python", "R"],
    tools: ["LaTeX", "Matlab", "Quantum ESPRESSO", "KiCad", "Fusion 360", "Figma"]
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            An aspiring physicist with a passion for scientific discovery and interdisciplinary research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-6">Education</h3>
            
            {education.map((item, index) => (
              <div key={index} className="mb-8 border-l-4 border-primary pl-4 pb-1">
                <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                <p className="text-neutral-600 mb-2">{item.institution}</p>
                <p className="text-sm text-neutral-500">{item.period} | {item.location}</p>
              </div>
            ))}
            
            <h3 className="text-2xl font-heading font-semibold mb-6 mt-12">Technical Skills</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <MaterialIcon name="code" className="text-primary mr-2" />
                  Programming
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  {skills.programming.map((skill, index) => (
                    <li key={index}>• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center">
                  <MaterialIcon name="architecture" className="text-primary mr-2" />
                  Software & Tools
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  {skills.tools.map((tool, index) => (
                    <li key={index}>• {tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-6">Research Interests</h3>
            
            <div className="space-y-6">
              {researchInterests.map((item, index) => (
                <div key={index} className="bg-neutral-100 p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center">
                    <MaterialIcon name={item.icon} className="text-secondary mr-2" />
                    {item.title}
                  </h4>
                  <p className="text-neutral-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
