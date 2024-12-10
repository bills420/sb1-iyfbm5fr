import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

interface PricingTier {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  priceId: string;
}

interface PricingCardProps {
  tier: PricingTier;
}

const stripePromise = loadStripe(import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PricingCard({ tier }: PricingCardProps) {
  const handleSubscribe = async () => {
    const stripe = await stripePromise;
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: tier.priceId,
        }),
      });
      
      const session = await response.json();
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        
        if (error) {
          console.error('Error:', error);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-zinc-900/50 rounded-xl p-8 border border-zinc-800/50">
      <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${tier.price}</span>
        <span className="text-zinc-400">/{tier.interval}</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-zinc-300">
            <Check className="h-5 w-5 text-purple-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      
      <button
        onClick={handleSubscribe}
        className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
      >
        Subscribe Now
      </button>
    </div>
  );
}