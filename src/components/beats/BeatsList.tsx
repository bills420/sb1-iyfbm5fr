import { Play, Pause, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { beats } from '../../data/beats';

export default function BeatsList() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section id="beats" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Beats</h2>
        
        <div className="grid gap-4">
          {beats.map((beat) => (
            <div
              key={beat.id}
              className="flex items-center space-x-4 bg-zinc-900/50 p-4 rounded-lg hover:bg-zinc-800/50 transition-all"
            >
              <button
                onClick={() => setPlaying(playing === beat.id ? null : beat.id)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {playing === beat.id ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </button>
              
              <div className="flex-1">
                <h3 className="font-medium">{beat.title}</h3>
                <p className="text-sm text-zinc-400">{beat.bpm} BPM • {beat.key}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium">${beat.price}</span>
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}