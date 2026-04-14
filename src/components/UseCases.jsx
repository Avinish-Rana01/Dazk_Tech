import { FadeIn, StaggerContainer, StaggerItem } from './Motion';

export default function UseCases() {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold font-headline mb-16 text-center">Built for teams that demand more.</h2>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/10 hover:shadow-primary/5">
            <h3 className="text-2xl font-bold font-headline mb-6">Startups</h3>
            <p className="text-on-surface-variant mb-10 flex-grow">Extend your runway by slashing cloud burn. Focus on product market fit while we handle the infra heavy lifting.</p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> 40% avg. cost reduction</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Instant CI/CD setup</li>
            </ul>
          </StaggerItem>
          <StaggerItem className="bg-surface-container-low p-10 rounded-2xl border border-primary/30 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/20">
            <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
            <h3 className="text-2xl font-bold font-headline mb-6">SaaS Platforms</h3>
            <p className="text-on-surface-variant mb-10 flex-grow">Scale to millions of users with rock-solid stability. Our AI handles global load balancing and latency optimization.</p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> 99.999% guaranteed uptime</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Multi-region failover</li>
            </ul>
          </StaggerItem>
          <StaggerItem className="bg-surface-container-low p-10 rounded-2xl border border-white/5 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/10 hover:shadow-primary/5">
            <h3 className="text-2xl font-bold font-headline mb-6">Enterprises</h3>
            <p className="text-on-surface-variant mb-10 flex-grow">Modernize legacy architecture with military-grade security. Unified governance across AWS, Azure, and GCP.</p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> SOC2 / GDPR / HIPAA ready</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-lg" data-icon="check_circle">check_circle</span> Hybrid cloud orchestration</li>
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
