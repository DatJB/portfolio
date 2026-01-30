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
      github: 'https://github.com/ThienTa2005/Hospital-web',
      demo: 'https://github.com/ThienTa2005/Hospital-web',
    },
    {
      title: 'Weather Forecast Application',
      description: 'A modern weather web application that provides real-time weather, hourly and daily forecasts. Features include geolocation-based weather, city search, unit conversion (°C/°F, km/h/mph, mm/in), and a responsive UI built with React and Tailwind CSS using the Open-Meteo API.',
      image: './assets/images/weather.jpg',
      tags: ['JavaScript', 'React', 'HTML', 'CSS', 'TailwindCSS', 'Vite'],
      github: 'https://github.com/DatJB/weather-app',
      demo: 'https://github.com/DatJB/weather-app',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
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
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
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
