import AnimatedBackground from '@/components/AnimatedBackground';
import Header from '@/components/Header';
import PortfolioMarquee from '@/components/PortfolioMarquee';
import ProcessSection from '@/components/ProcessSection';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <AnimatedBackground />
      <Header />
      <main className="pt-24">
        <PortfolioMarquee />
        <ProcessSection />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <SplashScreen />
    </div>
  );
};

export default Index;
