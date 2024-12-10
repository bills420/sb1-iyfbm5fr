import { artists } from '../../data/artists';
import TalentCard from './TalentCard';

export default function TalentsSection() {
  return (
    <section id="talents" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Talents</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Discover our roster of exceptional artists pushing the boundaries of music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <TalentCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}