import { ExternalLink, Music, Trophy, Users } from 'lucide-react';

export default function LoudArmySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="https://www.loud.army/favicon.png"
              alt="LOUD.army"
              className="h-8 w-8"
            />
            <h2 className="text-3xl font-bold text-white">LOUD.army Partner</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Proud to be one of LOUD.army's top-tier producers, delivering premium beats and exclusive collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
            <Trophy className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Top-Tier Producer</h3>
            <p className="text-zinc-400">
              Recognized as one of LOUD.army's elite beat makers, consistently delivering chart-worthy productions
            </p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
            <Music className="h-8 w-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Exclusive Beats</h3>
            <p className="text-zinc-400">
              Access premium beats through LOUD.army's platform with special licensing options
            </p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
            <Users className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Artist Network</h3>
            <p className="text-zinc-400">
              Connect with a global community of artists and producers through the LOUD.army network
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.loud.army/beatbybills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 transition-all duration-300"
          >
            <span>View LOUD.army Profile</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}