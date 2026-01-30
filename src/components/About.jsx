import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a third-year IT student with a passion for creating efficient, scalable solutions. 
              My journey in technology began with a curiosity about how things work, which has evolved 
              into a deep commitment to software development and system architecture.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I specialize in web development and have experience with modern frameworks 
              and tools. I'm constantly learning and adapting to new technologies, with a particular 
              interest in DevOps practices.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-2">Education</h3>
                  <p className="text-gray-600">Posts and Telecommunications Institute of Technology</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-2">Expected Graduation</h3>
                  <p className="text-gray-600">May-2027</p>
                  <p className="text-sm text-gray-500">GPA: 3.7/4.0</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-2">Location</h3>
                  <p className="text-gray-600">Hanoi, Vietnam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
