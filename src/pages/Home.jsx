
// Home Page Sections
import HeroSection from '../sections/Home/Herosection';
import Trust from '../sections/Home/Trust';
import Services from '../sections/Home/Services';
import Certificates from '../sections/Home/Certificates';
import AiHero from '../sections/Home/AiHero';
import Pricing from '../sections/Home/Pricing';
import CTA from '../sections/Home/CTA';
import ReviewSection from '../sections/Home/ReviewSection';

const Home = () => {
  return (
    <>
       <main>
        <HeroSection />
        <Trust />
        <Services />
        <Certificates />
        <AiHero />
        <Pricing />
        <ReviewSection />
         <CTA />
      </main>
     </>
  );
};

export default Home;