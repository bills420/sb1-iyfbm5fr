import { Wrench, Scissors, Code, Music, Building2, Bitcoin, Palette, HardHat } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen gradient-background text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.15] scale-105 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
            Your One-Stop Solution for<br />Physical & Digital Services
          </h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
            Dedicated to providing convenience, reliability, and exceptional outcomes
          </p>
          <a
            href="#contact"
            className="inline-block bg-zinc-800/50 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-zinc-700/50 transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600/50 hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* About Section */}
      <section id="about" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Bills Co.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We offer a diverse array of top-notch physical and digital services designed to cater to your specific requirements. Our expert professionals deliver excellence right to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From physical craftsmanship to digital solutions, we provide comprehensive services to meet all your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              Icon={Wrench}
              title="Carpentry"
              description="Expert crafting, repair, and maintenance of wooden structures and furniture"
              category="Physical Service"
            />
            <ServiceCard
              Icon={Scissors}
              title="Beauty Services"
              description="Professional beauty treatments, skincare, and grooming services"
              category="Physical Service"
            />
            <ServiceCard
              Icon={Palette}
              title="Design Services"
              description="Creative interior and exterior design planning and implementation"
              category="Physical Service"
            />
            <ServiceCard
              Icon={HardHat}
              title="Demolition"
              description="Professional and safe demolition of buildings and structures"
              category="Physical Service"
            />
            <ServiceCard
              Icon={Bitcoin}
              title="Crypto Consulting"
              description="Expert advice on cryptocurrencies and blockchain technology"
              category="Digital Service"
            />
            <ServiceCard
              Icon={Code}
              title="Web Development"
              description="Custom website design and development solutions"
              category="Digital Service"
            />
            <ServiceCard
              Icon={Music}
              title="Beat Making"
              description="Professional music beat production for artists"
              category="Digital Service"
            />
            <ServiceCard
              Icon={Building2}
              title="Music Production"
              description="Complete recording, mixing, and mastering services"
              category="Digital Service"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-zinc-400">
                Get in touch with us for any inquiries or service requests
              </p>
            </div>
            
            <ContactInfo />
            
            <form className="mt-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-xl bg-zinc-800/50 border-zinc-700/50 text-white shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-600/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-xl bg-zinc-800/50 border-zinc-700/50 text-white shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-600/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-xl bg-zinc-800/50 border-zinc-700/50 text-white shadow-sm focus:border-zinc-600 focus:ring focus:ring-zinc-600/50"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-zinc-800/50 text-white px-6 py-3 rounded-xl hover:bg-zinc-700/50 transition-all duration-300 border border-zinc-700/50 hover:border-zinc-600/50 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;