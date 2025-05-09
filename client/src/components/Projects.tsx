import { motion } from 'framer-motion';
import { MaterialIcon } from '@/lib/icons';
import { Badge } from '@/components/ui/badge';
import cubeImg from '@assets/cube.jpg';
import gnssImg from '@assets/gnss.png';
import vayuImg from '@assets/vayu.png';
import saumyaImg from '@assets/saumya.png';

export default function Projects() {
  const projects = [
    {
      title: "CubeSat Design",
      date: "January 2025",
      organization: "NAST",
      description: "Designed and constructed a model 1U CubeSat to explore satellite systems integration and telemetry data acquisition.",
      tags: ["Satellites", "Telemetry", "Engineering"],
      link: "#",
      image: cubeImg,
      imageAlt: "Small CubeSat hardware with circuit boards in a transparent case with blue frames"
    },
    {
      title: "GNSS-Based Traffic Analysis",
      date: "February 2025",
      organization: "NAST",
      description: "Analyzed real-time GNSS data to model spatiotemporal traffic behavior and congestion phenomena in urban environments.",
      tags: ["GNSS", "Data Analysis", "Python"],
      link: "#",
      image: gnssImg,
      imageAlt: "Diagram showing different GNSS satellite systems orbiting around Earth"
    },
    {
      title: "Vāyu - NASA Space Apps Challenge",
      date: "October 2024",
      organization: "NASA & NRCC",
      description: "Developed an interactive web app for visualizing NASA's greenhouse gas data using NextJS and ThreeJS.",
      tags: ["NextJS", "ThreeJS", "Data Visualization"],
      link: "#",
      winner: true,
      image: vayuImg,
      imageAlt: "Team Vayu logo showing a flower-like design with petals"
    },
    {
      title: "Saumya Quake - NASA Space Apps",
      date: "October 2023",
      organization: "NASA & NRCC",
      description: "Developed a web-based application focused on visualizing and analyzing moonquakes.",
      tags: ["Web Development", "Space Science", "Seismology"],
      link: "#",
      winner: true,
      image: saumyaImg,
      imageAlt: "Saumya logo showing a crescent moon with Om symbol"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-neutral-100 section-ripple projects-section">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            Exploring innovative solutions through practical applications of physics and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden physics-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.imageAlt} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                    <div className="text-white text-6xl">
                      <MaterialIcon name={project.title.includes("Vāyu") ? "air" : "public"} />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  {project.winner && (
                    <span className="text-xs bg-secondary text-white px-2 py-1 rounded-full">Global Nominee</span>
                  )}
                </div>
                <p className="text-neutral-600 text-sm mb-4">{project.date} | {project.organization}</p>
                <p className="text-neutral-700 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs bg-neutral-200 text-neutral-700 hover:bg-neutral-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors">
                  <span>View {project.winner ? "Project" : "Details"}</span>
                  <MaterialIcon name="arrow_forward" className="text-sm ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
