import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromiseSection from '@/components/PromiseSection';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import ExpertisesSection from '@/components/ExpertisesSection';
import AdvantagesCarousel from '@/components/AdvantagesCarousel';
import ProcessSection from '@/components/ProcessSection';
import Pricing from '@/components/Pricing';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import CEOPopup from '@/components/CEOPopup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <PromiseSection />
        <PortfolioMarquee />
        <ExpertisesSection />
        <AdvantagesCarousel />
        <ProcessSection />
        <Pricing />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <CEOPopup />
    </div>
  );
};

export default Index;