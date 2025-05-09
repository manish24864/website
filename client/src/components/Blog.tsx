import { motion } from 'framer-motion';
import { MaterialIcon } from '@/lib/icons';

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Plasma Physics: A Beginner's Guide",
      date: "April 15, 2025",
      excerpt: "An introduction to the fascinating world of plasma physics and its applications in modern technology.",
      link: "#",
      icon: "science",
      color: "primary-dark"
    },
    {
      title: "Quantum Computing: Principles and Promises",
      date: "March 28, 2025",
      excerpt: "Exploring the fundamentals of quantum computing and its potential to revolutionize computation.",
      link: "#",
      icon: "memory",
      color: "secondary-dark"
    },
    {
      title: "The CubeSat Revolution: Small Satellites, Big Impact",
      date: "February 10, 2025",
      excerpt: "How miniature satellites are changing space exploration and creating new opportunities in science.",
      link: "#",
      icon: "satellite_alt",
      color: "primary"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-neutral-100">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">From My Blog</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            Thoughts, insights, and explorations in physics and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-48 bg-${post.color} flex items-center justify-center`}>
                <MaterialIcon name={post.icon} className="text-white text-6xl" />
              </div>
              <div className="p-6">
                <p className="text-sm text-neutral-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-neutral-700 mb-4">
                  {post.excerpt}
                </p>
                <a href={post.link} className="inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors">
                  <span>Read More</span>
                  <MaterialIcon name="arrow_forward" className="text-sm ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block text-primary border-2 border-primary hover:bg-primary hover:text-white rounded px-6 py-3 font-medium transition-colors">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
