import { useNavigate } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from './Motion';


export default function Hero() {
  const navigate = useNavigate();

  const handleAuditClick = () => {
    navigate('/analyze');
  };
  
  return (
    <section className="relative pt-52 pb-52 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container/20 via-transparent to-transparent -z-10"></div>
      <StaggerContainer className="max-w-7xl mx-auto px-8 text-center" delay={0.2}>
        <StaggerItem>
          <span className="inline-block py-1 px-3 mb-6 rounded-full bg-tertiary-container/20 text-tertiary font-medium text-xs tracking-widest uppercase">Autonomous Infrastructure</span>
        </StaggerItem>
        <StaggerItem>
          <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight mb-8 leading-[1.1]">
            Reduce cloud costs. <br/>
            <span className="gradient-text">Improve performance.</span> <br/>
            Stay secure — powered by AI.
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Dazk automates cloud orchestration, eliminating waste and neutralizing threats before they impact your bottom line. Experience true DevOps at machine speed.
          </p>
        </StaggerItem>
        <StaggerItem>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button onClick={handleAuditClick} className="primary-cta px-10 py-4 rounded-xl text-on-primary font-bold text-lg shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(13,110,253,0.4)] active:scale-95">Get Free Cloud Audit</button>
            <button className="bg-surface-container-highest/40 backdrop-blur-md border border-outline-variant/15 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-surface-container-highest/60 hover:-translate-y-1 hover:shadow-lg active:scale-95">See How It Works</button>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
