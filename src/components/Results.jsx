import { FadeIn, StaggerContainer, StaggerItem } from './Motion';
import { motion } from 'framer-motion';

export default function Results() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-5xl font-bold font-headline mb-8 leading-tight">Numbers that move the needle.</h2>
            </FadeIn>
            <StaggerContainer className="grid grid-cols-2 gap-8">
              <StaggerItem>
                <div className="text-6xl font-bold font-headline text-primary mb-2">40%</div>
                <p className="text-on-surface-variant uppercase tracking-tighter text-sm">Avg. Cost Reduction</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-6xl font-bold font-headline text-secondary mb-2">3x</div>
                <p className="text-on-surface-variant uppercase tracking-tighter text-sm">Performance Boost</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-6xl font-bold font-headline text-tertiary mb-2">0</div>
                <p className="text-on-surface-variant uppercase tracking-tighter text-sm">Manual Scaling Events</p>
              </StaggerItem>
              <StaggerItem>
                <div className="text-6xl font-bold font-headline text-white mb-2">&lt;1hr</div>
                <p className="text-on-surface-variant uppercase tracking-tighter text-sm">Setup &amp; Audit Time</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <div className="relative overflow-hidden group rounded-3xl scanline w-fit">
              <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>
              <motion.img 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                alt="Results Graph" 
                className="rounded-3xl border border-white/5 relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105 opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZfGF-zImLoV9j0radc5tBJq8nKPseFB9EJcml08wmUQrxHUORRSqieEZXOdpI96aXs2UDF21Mh2sds5YOBR-iupENLhlSKzHr_09Wd1cpiBw_6JOF3pBSRo8Gjdh9GDrq6fIMpaESSzoAomQtNKdyROUQ_7DJV2-havG3aH-LEuHBV3mzim7_38c5DLa215mLlAjNU488JpLvqAhRD5WC36uOrRjw6obj5qVJiyDamBzVYEjM4sqfhMfWsAQ32WZPAq71c3srZb1g" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
