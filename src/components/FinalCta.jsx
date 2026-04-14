import { FadeIn } from './Motion';

export default function FinalCta() {
  return (
    <section className="py-24 text-center">
      <FadeIn className="max-w-7xl mx-auto px-8">
        <div className="inline-block py-1 px-4 rounded-full bg-error-container/20 text-error font-bold text-xs uppercase mb-8">Limited free audits available this month</div>
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-12">Ready to own your cloud?</h2>
        <div className="flex flex-col items-center gap-6">
          <button className="primary-cta px-12 py-5 rounded-xl text-on-primary font-bold text-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(13,110,253,0.4)] active:scale-95">Deploy Dazk Today</button>
          <div className="flex gap-8 text-on-surface-variant text-sm font-medium">
            <span>No commitment</span>
            <span className="opacity-30">•</span>
            <span>Results in 30 days</span>
            <span className="opacity-30">•</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
