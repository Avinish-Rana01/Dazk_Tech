import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { FadeIn } from '../components/Motion';

export default function AnalysisResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, region } = location.state || { results: null, region: '' };

  if (!results) {
    return (
      <div className="min-h-screen bg-surface text-on-surface">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <p className="text-xl text-on-surface-variant mb-4">No analysis data available.</p>
            <p className="text-on-surface-variant mb-8">Please run an analysis first.</p>
            <button
              onClick={() => navigate('/')}
              className="primary-cta px-6 py-3 rounded-xl text-on-primary font-bold transition-all duration-300 hover:scale-[1.02]"
            >
              Go back to home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderResourceCard = (resource, type) => {
    const isUnderutilized = resource.underutilized || resource.cpu_avg < 20;
    const isOverutilized = resource.overutilized || resource.cpu_avg > 80;
    
    let badgeText = "✅ OPTIMAL";
    let badgeClasses = "bg-green-500/20 text-green-300 border border-green-500/30";
    
    if (isUnderutilized) {
      badgeText = "⚠️ UNDERUTILIZED";
      badgeClasses = "bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white shadow-lg shadow-red-500/20";
    } else if (isOverutilized) {
      badgeText = "🔥 OVERUTILIZED";
      badgeClasses = "bg-gradient-to-r from-[#ef4444] to-[#b91c1c] text-white shadow-lg shadow-red-500/20";
    }

    return (
      <div key={resource.id} className="relative bg-white/5 rounded-xl p-5 mb-4 overflow-hidden border border-white/5">
        {/* Glowing Left Border */}
        <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-green-400 rounded-r-md shadow-[0_0_12px_#4ade80]"></div>
        
        {/* Title */}
        <h4 className="font-bold text-green-400 mb-3 text-[15px] truncate pl-3 drop-shadow-md">{resource.id}</h4>
        
        {/* Progress Bar Row */}
        <div className="flex items-center gap-4 mb-5 pl-3">
          <span className="text-sm font-bold text-white min-w-[40px] drop-shadow-md">{Math.round(resource.cpu_avg)}%</span>
          <div className="flex-1 h-2 bg-white/20 rounded-full relative">
            <div 
              className="absolute left-0 top-0 h-full bg-yellow-400 rounded-full transition-all duration-1000" 
              style={{ width: `${Math.min(resource.cpu_avg || 0, 100)}%` }}
            ></div>
            {/* Dot Indicator */}
            {resource.cpu_avg > 0 && (
              <div 
                 className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_10px_#facc15]" 
                 style={{ left: `calc(${Math.min(resource.cpu_avg, 100)}% - 5px)` }}
              ></div>
            )}
          </div>
        </div>
        
        {/* Badge */}
        <div className="pl-3">
          <span className={`text-[10px] uppercase font-bold px-3 py-1.5 rounded-full ${badgeClasses} inline-block tracking-wider`}>
            {badgeText}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navigation />
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium backdrop-blur-sm"
          >
            ← Back to Form
          </button>

          <FadeIn>
            {results.totalSavings && (
              <div className="mb-10 text-center">
                 <p className="text-on-surface-variant text-lg">Region: <span className="font-semibold text-white">{region}</span></p>
              </div>
            )}

            {/* Dashboard Container mimicking the image */}
            <div className="bg-[#2a2436]/70 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <h2 className="text-3xl font-serif font-bold text-white mb-8 tracking-wide drop-shadow-lg">Analysis Result</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* EC2 Column */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl">🖥️</span>
                    <h3 className="text-lg font-bold text-white">EC2 Instances ({results.ec2 ? results.ec2.length : 0})</h3>
                  </div>
                  {results.ec2 && results.ec2.length > 0 ? (
                    <div>{results.ec2.map(instance => renderResourceCard(instance, 'ec2'))}</div>
                  ) : (
                    <div className="h-full min-h-[150px] flex items-center justify-center italic text-white/40 text-sm text-center">
                      No EC2 instances found<br/>in this region
                    </div>
                  )}
                </div>

                {/* RDS Column */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl">🗄️</span>
                    <h3 className="text-lg font-bold text-white">RDS Databases ({results.rds ? results.rds.length : 0})</h3>
                  </div>
                  {results.rds && results.rds.length > 0 ? (
                    <div>{results.rds.map(db => renderResourceCard(db, 'rds'))}</div>
                  ) : (
                    <div className="h-full min-h-[150px] flex items-center justify-center italic text-white/40 text-sm text-center">
                      No RDS databases found<br/>in this region
                    </div>
                  )}
                </div>

                {/* Redis Column */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative z-10 lg:min-h-[400px]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl">⚡</span>
                    <h3 className="text-lg font-bold text-white">Redis Clusters</h3>
                  </div>
                  {results.redis && results.redis.length > 0 ? (
                    <div>{results.redis.map(cache => renderResourceCard(cache, 'redis'))}</div>
                  ) : (
                    <div className="h-4/5 flex items-center justify-center italic text-white/40 text-sm text-center px-4">
                      No Redis/ElastiCache clusters found<br/>in this region
                    </div>
                  )}
                </div>

              </div>
            </div>

            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/')}
                className="bg-white/10 border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl text-white font-bold transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
              >
                ← Back to Home
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}