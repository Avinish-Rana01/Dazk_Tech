import { FadeIn, StaggerContainer, StaggerItem } from './Motion';

export default function HowItWorks() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl font-bold font-headline mb-4">From Chaos to Control.</h2>
          <p className="text-on-surface-variant">Four steps to a resilient, self-healing cloud environment.</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StaggerItem className="relative p-8 border-r border-white/5 last:border-0 transition-colors duration-300 hover:bg-white/5 rounded-2xl group">
            <span className="text-6xl font-bold font-headline text-primary/10 absolute top-4 left-4 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110">01</span>
            <div className="relative z-10">
              <h4 className="text-xl font-bold font-headline mb-4">Analyze</h4>
              <p className="text-on-surface-variant text-sm">We connect to your stack via read-only IAM roles to map every dependency and cost center.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="relative p-8 border-r border-white/5 last:border-0 transition-colors duration-300 hover:bg-white/5 rounded-2xl group">
            <span className="text-6xl font-bold font-headline text-primary/10 absolute top-4 left-4 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110">02</span>
            <div className="relative z-10">
              <h4 className="text-xl font-bold font-headline mb-4">Optimize</h4>
              <p className="text-on-surface-variant text-sm">AI identifies waste and generates terraform-ready plans to re-architect for efficiency.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="relative p-8 border-r border-white/5 last:border-0 transition-colors duration-300 hover:bg-white/5 rounded-2xl group">
            <span className="text-6xl font-bold font-headline text-primary/10 absolute top-4 left-4 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110">03</span>
            <div className="relative z-10">
              <h4 className="text-xl font-bold font-headline mb-4">Secure</h4>
              <p className="text-on-surface-variant text-sm">Deployment of perimeter guardrails and encryption standards across all environments.</p>
            </div>
          </StaggerItem>
          <StaggerItem className="relative p-8 border-r border-white/5 last:border-0 transition-colors duration-300 hover:bg-white/5 rounded-2xl group">
            <span className="text-6xl font-bold font-headline text-primary/10 absolute top-4 left-4 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110">04</span>
            <div className="relative z-10">
              <h4 className="text-xl font-bold font-headline mb-4">Scale</h4>
              <p className="text-on-surface-variant text-sm">Activate the autonomous core to handle growth, surges, and spikes without intervention.</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
