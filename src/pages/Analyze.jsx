import LeadForm from '../components/LeadForm';
import Navigation from '../components/Navigation';

export default function Analyze() {
  return (
    <>
      <Navigation />
      <div className="h-[100dvh] w-full bg-surface text-on-surface flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="w-full max-w-[1400px] flex items-center justify-center transform scale-90 md:scale-[0.85] lg:scale-90 origin-center max-h-[100dvh]">
          <LeadForm />
        </div>
      </div>
    </>
  );
}
