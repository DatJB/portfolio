import { Code2, Database, Cloud, Wrench } from 'lucide-react';

export function Skills() {
  const skills = {
    languages: [
      { name: 'JavaScript', level: 'ES6+, Async/Await, DOM manipulation, REST API' },
      { name: 'Python', level: 'OOP, Data processing' },
      { name: 'Java', level: 'OOP principles, Collections, Spring Boot' },
      { name: 'SQL', level: 'JOINs, Subqueries, Indexing, Query optimization' },
      { name: 'HTML/CSS', level: 'Semantic HTML, Flexbox, Grid, Responsive design' },
    ],
    frameworks: [
      'React', 'Flask', 'Spring Boot', 'Tailwind CSS', 'Bootstrap'
    ],
    databases: [
      'SQLServer', 'MongoDB', 'MySQL', 'Dbeaver', 'SQLite'
    ],
    tools: [
      'Git','Github', 'Docker', 'VS Code', 'Linux', 'Postman', 'Figma'
    ]
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="border rounded-lg bg-white p-6">
            <h3 className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-blue-600" />
              Programming Languages
            </h3>
            <div className="space-y-4">
              {skills.languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className='font-semibold'>{lang.name}</span>
                  </div>
                  <div className="">
                    <div
                      className="" />
                      • {lang.level}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="border rounded-lg bg-white p-6">
              <h3 className="flex items-center gap-2 mb-6">
                <Wrench className="w-5 h-5 text-blue-600" />
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework) => (
                  <span
                    key={framework}
                    className="px-3 py-1 bg-gray-100 border rounded-full text-sm"
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            <div className="border rounded-lg bg-white p-6">
              <h3 className="flex items-center gap-2 mb-6">
                <Database className="w-5 h-5 text-blue-600" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((db) => (
                  <span
                    key={db}
                    className="px-3 py-1 bg-gray-100 border rounded-full text-sm"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>

            <div className="border rounded-lg bg-white p-6">
              <h3 className="flex items-center gap-2 mb-6">
                <Cloud className="w-5 h-5 text-blue-600" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-gray-100 border rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
