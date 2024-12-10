import { Check } from 'lucide-react';

const licenses = [
  {
    name: 'Basic License',
    price: 29.99,
    features: [
      'MP3 File',
      'Up to 10,000 streams',
      'Non-profit use only',
      'Must credit producer',
    ],
  },
  {
    name: 'Premium License',
    price: 99.99,
    features: [
      'WAV + MP3 Files',
      'Unlimited streams',
      'Commercial use',
      'Radio play',
      'Music videos',
      'Must credit producer',
    ],
  },
  {
    name: 'Exclusive Rights',
    price: 499.99,
    features: [
      'Full ownership',
      'All source files',
      'Unlimited use',
      'Remove from store',
      'No credit required',
    ],
  },
];

export default function Licensing() {
  return (
    <section id="licensing" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Licensing Options</h2>
          <p className="text-zinc-400">Choose the right license for your project</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {licenses.map((license) => (
            <div key={license.name} className="bg-black p-6 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-2">{license.name}</h3>
              <p className="text-3xl font-bold mb-6">${license.price}</p>
              <ul className="space-y-4">
                {license.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                Choose {license.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}