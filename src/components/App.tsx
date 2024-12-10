import { Wrench, Scissors, Code, Music, Building2, Bitcoin, Palette, HardHat } from 'lucide-react';
import Navbar from './Navbar';
import ServiceCard from './ServiceCard';
import ContactInfo from './ContactInfo';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import ChatWidget from './chat/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen gradient-background text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <ChatWidget />
    </div>
  );
}