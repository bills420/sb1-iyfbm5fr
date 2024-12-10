import { Music, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export default function BeatsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold">BEATBYBILLS</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#beats" className="text-zinc-300 hover:text-white transition-colors">Beats</a>
              <a href="#licensing" className="text-zinc-300 hover:text-white transition-colors">Licensing</a>
              <a href="#services" className="text-zinc-300 hover:text-white transition-colors">Services</a>
              <button className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}