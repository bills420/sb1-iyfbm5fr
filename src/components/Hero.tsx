import Button from './ui/Button';
import Container from './ui/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] scale-105 transform"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-gradient">
            Your One-Stop Solution for
            <br />
            Physical & Digital Services
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Dedicated to providing convenience, reliability, and exceptional outcomes
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView()}
              className="glow"
            >
              Explore Services
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}