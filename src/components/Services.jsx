import { FadeIn, StaggerContainer, StaggerItem } from './Motion';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section className="py-32 bg-surface-container-low relative">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <FadeIn>
            <h2 className="text-4xl font-bold font-headline mb-8 leading-tight">Architecture built for <br/><span className="text-primary">Performance and Safety.</span></h2>
          </FadeIn>
          <StaggerContainer className="space-y-8">
            <StaggerItem className="flex gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <span className="material-symbols-outlined text-primary" data-icon="energy_savings_leaf">energy_savings_leaf</span>
              </div>
              <div>
                <h4 className="text-lg font-bold font-headline mb-1">Cloud Optimization</h4>
                <p className="text-on-surface-variant text-sm">Intelligent spot instance management and right-sizing that cuts bills by up to 40% without downtime.</p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/20">
                <span className="material-symbols-outlined text-secondary" data-icon="shield_lock">shield_lock</span>
              </div>
              <div>
                <h4 className="text-lg font-bold font-headline mb-1">Adaptive Security</h4>
                <p className="text-on-surface-variant text-sm">Zero-trust network enforcement that evolves with your traffic patterns to block sophisticated attacks.</p>
              </div>
            </StaggerItem>
            <StaggerItem className="flex gap-6 group">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-tertiary/20">
                <span className="material-symbols-outlined text-tertiary" data-icon="fact_check">fact_check</span>
              </div>
              <div>
                <h4 className="text-lg font-bold font-headline mb-1">Automated Compliance</h4>
                <p className="text-on-surface-variant text-sm">Real-time SOC2 and HIPAA auditing that ensures you&apos;re always audit-ready without manual reports.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="relative overflow-hidden group rounded-3xl w-fit">
            <div className="absolute -inset-10 bg-tertiary/5 blur-3xl rounded-full transition-opacity duration-700 group-hover:opacity-100 opacity-50"></div>
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              alt="Cloud Infrastructure" 
              className="rounded-3xl border border-white/5 relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-UVtgEk76yWvbKOw3AgAMGJraaUB8QRhldroHpLLd3DwZNITZ3SkTqbPRQZV4LI1wSZw-D4Jk3ipq2Ae9Dbjg4a1VpxWAS8o4eteb6mE1l7DK33CWyaeDyPzo4h2LqdIZ884ruK-WhX1-1QqM3j5xwHF83okTfFtDNd89db2porXqvQl7oXS3h39rRZ-ziZdLJgtUI-vDzUvfj8wqQbm02y2lXESJtjQstdeeJhhtUJ78tiBe3R-oTBav4kzl-_Fo3dRAWT9duH_" />
          </div>
        </div>
      </div>
    </section>
  );
}

