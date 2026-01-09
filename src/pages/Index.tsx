import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
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
        <PortfolioMarquee />
        <HowItWorks />
        <Benefits />
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
