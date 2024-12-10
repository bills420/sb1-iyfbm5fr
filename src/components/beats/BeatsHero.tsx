import { ExternalLink } from 'lucide-react';

export default function BeatsHero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
          alt="Studio background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            BEATBYBILLS
          </h1>
          <a
            href="https://www.loud.army/beatbybills"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
          >
            <img
              src="https://www.loud.army/favicon.png"
              alt="LOUD.army"
              className="h-4 w-4"
            />
            <span>LOUD.army</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
          Professional grade beats for artists, producers, and content creators
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#beats"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
          >
            Browse Beats
          </a>
          <a
            href="#licensing"
            className="px-8 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
          >
            View Licenses
          </a>
        </div>
      </div>
    </section>
  );
}