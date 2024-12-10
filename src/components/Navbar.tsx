import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl px-6 border border-zinc-700/50">
          <div className="flex items-center justify-between h-16">
            <Logo />
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">Projects</a>
                <a href="/beats" className="text-zinc-400 hover:text-white transition-colors">Beats</a>
                <a 
                  href="#contact" 
                  className="bg-zinc-800/50 text-white px-6 py-2.5 rounded-xl hover:bg-zinc-700/50 transition-all duration-300 border border-zinc-700/50"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="mx-4 mt-2 bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors">Services</a>
              <a href="#about" className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors">Projects</a>
              <a href="/beats" className="block px-3 py-2 text-zinc-400 hover:text-white transition-colors">Beats</a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-white font-medium hover:text-zinc-200 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}