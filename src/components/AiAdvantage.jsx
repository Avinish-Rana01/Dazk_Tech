import { FadeIn, StaggerContainer, StaggerItem } from './Motion';

export default function AiAdvantage() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <FadeIn className="text-center mb-24">
          <h2 className="text-4xl font-bold font-headline mb-4">The AI Advantage</h2>
          <p className="text-on-surface-variant">Don&apos;t just manage cloud—predict it.</p>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StaggerItem className="text-center px-6 group">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="psychology">psychology</span>
              </div>
            </div>
            <h4 className="text-xl font-bold font-headline mb-4">Predictive Scaling</h4>
            <p className="text-on-surface-variant text-sm">Our neural networks analyze 30+ signals to predict traffic spikes before they happen, warming up resources ahead of time.</p>
          </StaggerItem>
          <StaggerItem className="text-center px-6 group">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary/30">
                <span className="material-symbols-outlined text-secondary text-3xl" data-icon="warning">warning</span>
              </div>
            </div>
            <h4 className="text-xl font-bold font-headline mb-4">Anomaly Detection</h4>
            <p className="text-on-surface-variant text-sm">Dazk identifies unusual API behavior or cost spikes in milliseconds, automatically isolating suspicious workloads.</p>
          </StaggerItem>
          <StaggerItem className="text-center px-6 group">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-tertiary/20 flex items-center justify-center border border-tertiary/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-tertiary/30">
                <span className="material-symbols-outlined text-tertiary text-3xl" data-icon="bolt">bolt</span>
              </div>
            </div>
            <h4 className="text-xl font-bold font-headline mb-4">Self-Healing Automation</h4>
            <p className="text-on-surface-variant text-sm">When services fail, Dazk doesn&apos;t just alert you. It restarts, re-provisions, or rolls back changes autonomously.</p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
