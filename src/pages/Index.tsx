import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromiseSection from '@/components/PromiseSection';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import ExpertisesSection from '@/components/ExpertisesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ProcessSection from '@/components/ProcessSection';
import Pricing from '@/components/Pricing';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <PortfolioMarquee />
        <ExpertisesSection />
        <AdvantagesSection />
        <ProcessSection />
        <Pricing />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
