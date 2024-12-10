import { Wrench, Scissors, Code, Music, Building2, Bitcoin, Palette, HardHat } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
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
  );
}