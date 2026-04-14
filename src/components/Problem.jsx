import { FadeIn, StaggerContainer, StaggerItem } from './Motion';

export default function Problem() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <FadeIn className="mb-20">
          <h2 className="text-4xl font-bold font-headline mb-4">Your cloud shouldn’t be this hard.</h2>
          <p className="text-on-surface-variant text-lg max-w-xl">Legacy management tools can&apos;t keep up with the scale of modern distributed systems. You&apos;re losing money in the gaps.</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StaggerItem className="bg-surface-container-low p-8 rounded-2xl transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent hover:border-white/5">
            <span className="material-symbols-outlined text-primary mb-6" data-icon="payments">payments</span>
            <h3 className="text-xl font-bold font-headline mb-3">Overpaying</h3>
            <p className="text-on-surface-variant text-sm">30% of cloud spend is wasted on idle or oversized resources that Dazk identifies in minutes.</p>
          </StaggerItem>
          <StaggerItem className="bg-surface-container-low p-8 rounded-2xl transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent hover:border-white/5">
            <span className="material-symbols-outlined text-primary mb-6" data-icon="auto_mode">auto_mode</span>
            <h3 className="text-xl font-bold font-headline mb-3">Manual Scaling</h3>
            <p className="text-on-surface-variant text-sm">Stop waking up at 3 AM. Our AI predicts traffic surges and scales infrastructure autonomously.</p>
          </StaggerItem>
          <StaggerItem className="bg-surface-container-low p-8 rounded-2xl transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent hover:border-white/5">
            <span className="material-symbols-outlined text-primary mb-6" data-icon="gpp_bad">gpp_bad</span>
            <h3 className="text-xl font-bold font-headline mb-3">Security Risks</h3>
            <p className="text-on-surface-variant text-sm">Misconfigurations are the #1 cause of breaches. We patch infrastructure holes in real-time.</p>
          </StaggerItem>
          <StaggerItem className="bg-surface-container-low p-8 rounded-2xl transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent hover:border-white/5">
            <span className="material-symbols-outlined text-primary mb-6" data-icon="visibility_off">visibility_off</span>
            <h3 className="text-xl font-bold font-headline mb-3">No Visibility</h3>
            <p className="text-on-surface-variant text-sm">Fragmented dashboards lead to blind spots. Get a single source of truth across all providers.</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
