import { Mic, Music, Sliders, Radio } from 'lucide-react';

const services = [
  {
    icon: Mic,
    title: 'Recording',
    description: 'Professional recording services in our state-of-the-art studio',
  },
  {
    icon: Music,
    title: 'Custom Production',
    description: 'Custom beat production tailored to your style and needs',
  },
  {
    icon: Sliders,
    title: 'Mixing & Mastering',
    description: 'Industry-standard mixing and mastering for your tracks',
  },
  {
    icon: Radio,
    title: 'Distribution',
    description: 'Get your music on all major streaming platforms',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Studio Services</h2>
          <p className="text-zinc-400">Complete production services for artists</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
              <service.icon className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}