import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-4 text-center">Contact</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm currently looking for internship opportunities and always open to discussing new projects or collaboration ideas.
        </p>

        <div className="">
          <div className="space-y-6 grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-gray-600">
                    nguyendinhdat343@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 bg-white">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-gray-600">
                    (+84) 919 404 095
                  </p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-6 h-25 bg-white">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                <div>
                  <h3 className="mb-1">Location</h3>
                  <p className="text-gray-600">
                    Hanoi, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="md:col-span-2 border rounded-lg bg-white p-6">
            <h3 className="text-xl mb-2">Send a Message</h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
            
            * <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form> 
          </div> */}
        </div>
      </div>
    </section>
  );
}