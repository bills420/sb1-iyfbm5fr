import PricingCard from './PricingCard';

const subscriptionTiers = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    interval: 'month',
    features: [
      'Access to basic beat library',
      'Download 3 beats per month',
      'Standard license included',
      'Email support'
    ],
    priceId: 'price_basic_monthly'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29.99,
    interval: 'month',
    features: [
      'Access to full beat library',
      'Unlimited downloads',
      'Commercial license included',
      'Priority support',
      'Custom beat requests'
    ],
    priceId: 'price_pro_monthly'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99.99,
    interval: 'month',
    features: [
      'Everything in Pro',
      'Exclusive rights available',
      'One-on-one sessions',
      'Custom production',
      '24/7 VIP support'
    ],
    priceId: 'price_enterprise_monthly'
  }
] as const;

export default function SubscriptionPlans() {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Subscription Plans</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Choose the perfect plan for your music production needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}