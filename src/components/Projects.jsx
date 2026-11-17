import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'An e-commerce web application with shopping cart, chatbot, and admin dashboard. Features include product search, user authentication, and order management.',
      image: './assets/images/pypy.png',
      tags: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite'],
      github: 'https://github.com/BTu-newbiecod/flask-ecommerce-project',
      demo: 'https://github.com/BTu-newbiecod/flask-ecommerce-project',
    },
    {
      title: 'Clinic Management System',
      description: 'A web-based medical appointment management system that allows patients to book appointments, doctors to manage schedules and medical records, and administrators to monitor system activities.',
      image: './assets/images/java.png',
      tags: ['Java', 'Servlet', 'JSP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      github: 'https://github.com/DatJB/hospital-web',
      demo: 'https://github.com/DatJB/hospital-web',
    },
    {
      title: 'Weather Forecast Application',
      description: 'A modern weather web application that provides real-time weather, hourly and daily forecasts. Features include geolocation-based weather, city search, unit conversion (°C/°F, km/h/mph, mm/in), and a responsive UI built with React and Tailwind CSS using the Open-Meteo API.',
      image: './assets/images/weather.jpg',
      tags: ['JavaScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Vite'],
      github: 'https://github.com/DatJB/weather-app',
      demo: 'https://datjb.github.io/weather-app/',
    },
    {
      title: 'Soundbook Social Network',
      description: 'Soundbook is a comprehensive, music- and book-centric social network platform designed to connect users through their shared reading and listening tastes. The system is built on a client-server architecture backed by a relational database, featuring real-time interactive capabilities powered by WebSockets. Its defining feature is a personalized Taste DNA profiling engine (spanning Music, Book, and hybrid Taste DNA) that analyzes user preferences and calculates taste vectors for community matching. Beyond profiling, Soundbook supports a full suite of social capabilities, including rich content creation (reading updates, quote cards, reviews, blogs, and music notes), structured bookshelves and music collections, direct messaging, and collaborative Live Listening Rooms where users can co-listen, vote on a shared queue, and chat in real time.',
      image: './assets/images/soundbook.png',
      tags: ['HTML', 'React', 'TailwindCSS', 'Spring Boot', 'Spring Security', 'Websockets/STOMP', 'OAuth 2.0', 'Youtube Data v3', 'Google Books', 'Cloudinary', 'REST API', 'Gemini API', 'Redis', 'RabbitMQ'],
      github: 'https://github.com/DatJB/soundbook-social-network',
      demo: 'https://github.com/DatJB',
    },
    {
      title: 'Karaoke Management System',
      description: 'This project is a secure Karaoke Management System designed to streamline venue operations through strict role-based access control for bookings, room management, and billing. The platform leverages AI-powered feedback analysis to gain actionable insights from customer reviews, helping continuously improve service quality. To ensure high security and data integrity, the platform integrates Google Authentication for safe access, features robust invoice protection to prevent unauthorized tampering, and maintains comprehensive audit logs to track all critical user actions and system changes.',
      image: './assets/images/karaoke.png',
      tags: ['HTML', 'React', 'TailwindCSS', 'Spring Boot', 'Spring Security', 'Websockets', 'Cloudinary', 'REST API', 'Gemini API', 'Google Authentication', 'TOTP 2FA', 'Audit Logging', 'Shamir Secret Sharing', 'SHA-256', 'RSA'],
      github: 'https://github.com/DatJB/karaoke-management-system',
      demo: 'https://github.com/DatJB',
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that demonstrate my skills in web development, 
          UI/UX design, and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 border rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
