import { Github, Linkedin, Mail, Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-5xl">
            AS
          </div> */}
          <div className='mb-6 rounded-full flex items-center justify-center'>
            <img src="./assets/images/avt.jpg" className='w-35 h-35 rounded-full'/>
          </div>
          <h1 className="text-5xl md:text-6xl mb-4">
            Dinh Dat Nguyen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            Third-year IT Student at PTIT
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2 mb-8">
            Passionate about building innovative solutions and exploring new technologies. 
            Currently pursuing a Engineer's degree in Information Technology with a focus on software development.
          </p>
        </div>

        {/* <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div> */}

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/DatJB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/%C4%91%C3%ACnh-%C4%91%E1%BA%A1t-nguy%E1%BB%85n-8849ba287/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:nguyendinhdat343@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
