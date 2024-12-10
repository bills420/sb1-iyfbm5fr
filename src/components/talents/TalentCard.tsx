import { type Artist } from '../../types/artist';
import { Instagram, Twitter, Globe } from 'lucide-react';

interface TalentCardProps {
  artist: Artist;
}

export default function TalentCard({ artist }: TalentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800/50">
      <div className="aspect-square overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{artist.name}</h3>
          <p className="text-zinc-300 text-sm mb-4">{artist.genre}</p>
          
          <div className="flex space-x-4">
            {artist.instagram && (
              <a
                href={artist.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {artist.twitter && (
              <a
                href={artist.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {artist.website && (
              <a
                href={artist.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}