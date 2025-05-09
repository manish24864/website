import { motion } from 'framer-motion';
import { MaterialIcon } from '@/lib/icons';

export default function Publications() {
  const publications = [
    {
      title: "Study of Micro-Discharges in Dielectric Barrier Discharge: Influence of Electrode Structure and Materials",
      journal: "Nepal Journals Online (JScE)",
      date: "April 2024",
      doi: "10.3126/jsce.v...",
      authors: "Manish Pandey et. al.",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="section-padding bg-white section-ripple publications-section">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Publications</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            My contributions to scientific literature and academic research.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 bg-primary-dark flex items-center justify-center md:w-48 py-6 md:py-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {publication.title}
                    </h3>
                    <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">
                      {publication.date}
                    </span>
                  </div>
                  <p className="text-neutral-700 mb-4">
                    Published in {publication.journal}
                  </p>
                  <div className="text-sm text-neutral-600 mb-6">
                    <p>DOI: {publication.doi}</p>
                    <p>Authors: {publication.authors}</p>
                  </div>
                  
                  <div>
                    <a href={publication.link} className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors">
                      <span>Read Publication</span>
                      <MaterialIcon name="arrow_forward" className="text-sm ml-1" />
                    </a>
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
