import { useState } from 'react';
import { FadeIn } from './Motion';
import { useNavigate } from 'react-router-dom';
import { analyzeAWS } from '../services/awsAnalyzer';

export default function LeadForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    region: 'us-west-2',
    accessKey: '',
    secretKey: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();

    if (!formData.accessKey || !formData.secretKey || !formData.region) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const result = await analyzeAWS(
        formData.accessKey,
        formData.secretKey,
        formData.region
      );

      // Pass results to analysis page
      navigate('/analysis-results', {
        state: {
          results: result,
          region: formData.region
        }
      });
    } catch (error) {
      alert(`Analysis failed: ${error.message}`);
      console.error('Analysis error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row py-6 md:py-12 overflow-hidden w-full" id="audit">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-container blur-[80px] opacity-15 rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-tertiary-container blur-[80px] opacity-15 rounded-full"></div>
      </div>

      {/* Left Column: Visualization */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative flex-col justify-center items-center px-12 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 scanline opacity-30"></div>

        <FadeIn className="relative z-10 w-full max-w-lg aspect-square">
          {/* Data Flow Visualization Simulation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full border border-outline-variant/15 rounded-full animate-pulse flex items-center justify-center">
              <div className="w-4/5 h-4/5 border border-outline-variant/20 rounded-full flex items-center justify-center">
                <div className="w-3/5 h-3/5 border border-outline-variant/30 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-primary/40 shadow-[0_0_40px_rgba(13,110,253,0.3)]">
                    <span className="material-symbols-outlined text-primary text-4xl" data-icon="hub">hub</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Data Points */}
            <div className="absolute top-1/4 left-0 bg-[#1f1f24]/40 backdrop-blur-[24px] p-3 rounded-xl border border-outline-variant/10 shadow-xl transform -rotate-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary" data-icon="security" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Auth Protocol: Active</span>
              </div>
            </div>
            <div className="absolute bottom-1/4 right-0 bg-[#1f1f24]/40 backdrop-blur-[24px] p-3 rounded-xl border border-outline-variant/10 shadow-xl transform rotate-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="cloud_sync" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_sync</span>
                <span className="text-xs font-headline uppercase tracking-widest text-on-surface-variant">Sync: 12.4ms Latency</span>
              </div>
            </div>
          </div>
          <img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen rounded-full" alt="abstract high-tech digital connectivity visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoAHLf2RhAfkdqRR3MXoeX3DoTep4kIwTqnQnNZKYWkZsey0_N60sWq-QWGpyzEo6k8HmP4Qf3YXn8P_KIA5RI_LwVhpB6WQoBZ1T_u7j72wgskA73ixM8WH4O9fltw5s15ek15J9GWBHi-tvP4giiOJTA2eDBhZxM4eWTM_ru_sP4_Ap-mXvRWP0P4QMYhkCV1j7t1UQ3jn7KaoPsokc1LXv4gngrGm8DAEPDvPtPQI6Wrhs1_xmwvQKHlM-DMnZwiWkbLhYTSKe8" />
        </FadeIn>

        <FadeIn className="relative z-10 mt-12 text-center max-w-md">
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface leading-tight mb-4">
            Architectural <span className="text-primary" style={{ textShadow: "0 0 12px rgba(177, 197, 255, 0.4)" }}>Intelligence</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            Map your entire cloud topology in seconds. Our autonomous engine identifies misconfigurations before they become vulnerabilities.
          </p>
        </FadeIn>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-8 lg:p-12 relative">
        {/* Data Chips Cluster */}
        <FadeIn className="w-full max-w-xl mb-8 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/10">
            <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(0,219,233,0.6)]"></span>
            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Encryption: AES-256</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-primary text-sm" data-icon="verified_user" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">Verified: SOC2 Type II</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/10">
            <span className="material-symbols-outlined text-secondary text-sm" data-icon="memory" style={{ fontVariationSettings: "'FILL' 1" }}>memory</span>
            <span className="text-[10px] font-bold tracking-widest text-on-surface-variant uppercase">AI Core: Neural-V4</span>
          </div>
        </FadeIn>

        <FadeIn className="w-full max-w-xl bg-[#1f1f24]/40 backdrop-blur-[24px] p-8 md:p-8 rounded-[2rem] border border-outline-variant/15 shadow-2xl z-10">
          <div className="mb-8">
            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight mb-2">Secure Cloud Gateway</h2>
            <p className="text-on-surface-variant text-sm">Provide your environment credentials to initialize the deep architecture analysis.</p>
          </div>
          <form className="space-y-6" onSubmit={handleAnalyze}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Region Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs font-headline font-semibold text-primary/80 uppercase tracking-widest ml-1">Cloud Region</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="public">public</span>
                  <input
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-lowest border-outline-variant/15 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 rounded-xl py-3 pl-12 pr-4 text-on-surface transition-all placeholder:text-outline/40 outline-none"
                    placeholder="e.g. us-east-1"
                    type="text"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Access Key ID */}
            <div className="space-y-2">
              <label className="block text-xs font-headline font-semibold text-primary/80 uppercase tracking-widest ml-1">Access Key ID</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="key">key</span>
                <input
                  name="accessKey"
                  value={formData.accessKey}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-lowest border-outline-variant/15 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 rounded-xl py-3 pl-12 pr-4 text-on-surface transition-all placeholder:text-outline/40 outline-none"
                  placeholder="AKIAXXXXXXXXXXXXXXXX"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Secret Access Key */}
            <div className="space-y-2">
              <label className="block text-xs font-headline font-semibold text-primary/80 uppercase tracking-widest ml-1">Secret Access Key</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="lock">lock</span>
                <input
                  name="secretKey"
                  value={formData.secretKey}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-lowest border-outline-variant/15 focus:border-primary/40 focus:ring-4 focus:ring-primary/10 rounded-xl py-3 pl-12 pr-4 text-on-surface transition-all placeholder:text-outline/40 outline-none"
                  placeholder="••••••••••••••••••••••••••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-br from-[#b1c5ff] to-[#0d6efd] text-on-primary-container py-4 rounded-xl font-headline font-bold text-lg hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 ease-out shadow-[0_0_30px_rgba(13,110,253,0.4)] group relative overflow-hidden outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? 'Analyzing...' : 'Analyze Architecture'}
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
                </span>
                {/* Subtle Glow Layer */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-center text-[11px] text-on-surface-variant/60 mt-4 uppercase tracking-[0.2em]">
                Credential data is processed locally and never stored on our servers.
              </p>
            </div>
          </form>
        </FadeIn>

        <div className="mt-8 flex gap-12 grayscale opacity-40">
          <span className="material-symbols-outlined text-4xl" data-icon="cloud">cloud</span>
          <span className="material-symbols-outlined text-4xl" data-icon="database">database</span>
          <span className="material-symbols-outlined text-4xl" data-icon="lan">lan</span>
          <span className="material-symbols-outlined text-4xl" data-icon="memory">memory</span>
        </div>
      </div>
    </section>
  );
}