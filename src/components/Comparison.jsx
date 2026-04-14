import { FadeIn } from './Motion';

export default function Comparison() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold font-headline mb-12 md:mb-16 text-center">Why Dazk vs Traditional</h2>
        </FadeIn>
        <FadeIn className="rounded-2xl border border-white/5 bg-surface-container-low transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/10" delay={0.2}>
          <div className="w-full overflow-x-auto rounded-2xl">
            <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="p-4 md:p-6 font-headline font-bold">Feature</th>
                  <th className="p-4 md:p-6 font-headline font-bold text-primary">Dazk AI Platform</th>
                  <th className="p-4 md:p-6 font-headline font-bold text-on-surface-variant">Legacy Management</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm md:text-base">
                <tr className="transition-colors hover:bg-white/5">
                  <td className="p-4 md:p-6 font-medium">Optimization</td>
                  <td className="p-4 md:p-6 text-primary">Real-time AI Automation</td>
                  <td className="p-4 md:p-6 text-on-surface-variant">Static Manual Rules</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="p-4 md:p-6 font-medium">Response Time</td>
                  <td className="p-4 md:p-6 text-primary">Sub-second Latency</td>
                  <td className="p-4 md:p-6 text-on-surface-variant">Minutes to Hours</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="p-4 md:p-6 font-medium">Security</td>
                  <td className="p-4 md:p-6 text-primary">Active Threat Mitigation</td>
                  <td className="p-4 md:p-6 text-on-surface-variant">Passive Log Auditing</td>
                </tr>
                <tr className="transition-colors hover:bg-white/5">
                  <td className="p-4 md:p-6 font-medium">Engineering Effort</td>
                  <td className="p-4 md:p-6 text-primary">Zero-Touch Operations</td>
                  <td className="p-4 md:p-6 text-on-surface-variant">Full DevOps Team Needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
