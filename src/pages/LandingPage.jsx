import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import Problem from '../components/Problem';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Results from '../components/Results';
import AiAdvantage from '../components/AiAdvantage';
import Comparison from '../components/Comparison';
import CaseStudies from '../components/CaseStudies';
import LeadForm from '../components/LeadForm';
import FinalCta from '../components/FinalCta';
import Footer from '../components/Footer';
import StickyCta from '../components/StickyCta';

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface">
      {/* <OutputPage /> */}
      <Navigation />
      <main className="relative">
        <Hero />
        {/* <Logos /> */}
        <Problem />
        <div id="services">
          <Services />
        </div>
        <HowItWorks />
        <UseCases />
        <Results />
        <AiAdvantage />
        <Comparison />
        <CaseStudies />
        {/* <LeadForm /> */}
        {/* <FinalCta /> */}
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}