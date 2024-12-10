import BeatsHero from './BeatsHero';
import BeatsNavbar from './BeatsNavbar';
import BeatsList from './BeatsList';
import Licensing from './Licensing';
import Services from './Services';
import TalentsSection from '../talents/TalentsSection';
import SubscriptionPlans from '../subscription/SubscriptionPlans';
import LoudArmySection from '../loud/LoudArmySection';

export default function BeatsApp() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BeatsNavbar />
      <BeatsHero />
      <LoudArmySection />
      <BeatsList />
      <TalentsSection />
      <SubscriptionPlans />
      <Licensing />
      <Services />
    </div>
  );
}