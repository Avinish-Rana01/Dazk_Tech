import { FadeIn } from './Motion';

export default function Logos() {
  return (
    <section className="py-16 bg-surface-container-lowest">
      <FadeIn className="max-w-7xl mx-auto px-8">
        <p className="text-center text-on-surface-variant text-sm font-medium tracking-widest uppercase mb-10 opacity-60">Trusted by forward-thinking engineering teams</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center grayscale opacity-40">
          <span className="text-2xl font-bold font-headline transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">VOLTAIC</span>
          <span className="text-2xl font-bold font-headline transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">NEURALIS</span>
          <span className="text-2xl font-bold font-headline transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">QUANTUM</span>
          <span className="text-2xl font-bold font-headline transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">HELIOS</span>
          <span className="text-2xl font-bold font-headline transition-all duration-300 hover:grayscale-0 hover:opacity-100 cursor-default">CYPHER</span>
        </div>
      </FadeIn>
    </section>
  );
}
