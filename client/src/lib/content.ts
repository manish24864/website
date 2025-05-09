// Content data to be used across the application
import plasmaImg from '@assets/plasma.png';
import gnssImg from '@assets/gnss.png';
import cubeImg from '@assets/cube.jpg';

export const personalInfo = {
  name: "Manish Pandey",
  role: "Physics Researcher & Data Analyst",
  bio: "Exploring the fascinating intersections of theoretical physics, plasma physics, and quantum computing. Currently pursuing my Bachelor of Science in Physics at St. Xavier's College, Tribhuvan University.",
  location: "Mahendranagar, Kanchanpur, Nepal",
  email: "manish.phy.math@gmail.com",
  phone: "(+977) 9742400662"
};

export const education = [
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

export const skills = {
  programming: ["Python", "R"],
  tools: ["LaTeX", "Matlab", "Quantum ESPRESSO", "KiCad", "Fusion 360", "Figma"]
};

export const researchInterests = [
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

export const researchExperience = [
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

export const publications = [
  {
    title: "Study of Micro-Discharges in Dielectric Barrier Discharge: Influence of Electrode Structure and Materials",
    journal: "Nepal Journals Online (JScE)",
    date: "April 2024",
    doi: "10.3126/jsce.v...",
    authors: "Manish Pandey et. al.",
    link: "#"
  }
];

export const projects = [
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
    image: null,
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
    image: null,
    imageAlt: "Saumya logo showing a crescent moon with Om symbol"
  }
];

export const workshops = [
  {
    title: "Basics of Quantum ESPRESSO Workshop",
    date: "22 – 24 Apr 2025",
    location: "St. Xavier's College, Maitighar, Kathmandu",
    description: "Attended a focused workshop on the basics of Quantum ESPRESSO, covering electronic structure calculations, DFT, and hands-on simulations for materials modeling.",
    tags: ["Material Science", "DFT", "Computational Physics"],
    image: null,
    imageAlt: "Quantum ESPRESSO logo"
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

export const blogPosts = [
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

export const contactInfo = [
  {
    icon: "location_on",
    title: "Location",
    content: "Mahendranagar, Kanchanpur, Nepal"
  },
  {
    icon: "email",
    title: "Email",
    content: "manish.phy.math@gmail.com"
  },
  {
    icon: "phone",
    title: "Phone",
    content: "(+977) 9742400662"
  }
];

export const socialLinks = [
  { icon: "school", href: "#" },
  { icon: "link", href: "#" },
  { icon: "code", href: "#" }
];
