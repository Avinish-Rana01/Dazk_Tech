export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <img alt="Dazk Logo" className="h-8 w-auto object-contain inline-block" src="https://lh3.googleusercontent.com/aida/ADBb0ugq4jAjLMtCtKHusMr7BUz97SitvRY4GrhFJmnfg7nsmijetaZquqSceq-sQkc9cVQAkkUvdBYGTbi883fyjVxg_viX4fU7NUxHaManCxfDRYPU25AQ5Z_n7XK2HWa9gYKdwezhKvf4VVFC0eIdpq0kFOGkXChIeLJ3pVcaW68BpQGDtR4ckLE6OMKbG8lWQ4iUCexDBmaZgjLn1Hny42rKuNh5VBN0eWe0fJitJXU9NpvNduBDnlinmljlCX6n_x7lX6gnl8h1aUY" />
          <span className="ml-2 text-xl font-bold tracking-tighter font-headline text-white align-middle">DAZK</span>
          <p className="text-slate-500 text-sm mb-6 mt-4">The autonomous cloud architecture for high-performance engineering teams.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer" data-icon="share">share</span>
            <span className="material-symbols-outlined text-slate-500 hover:text-white transition-colors duration-300 cursor-pointer" data-icon="language">language</span>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 font-headline">Expertise</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">Cloud Migration</a></li>
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">Security Ops</a></li>
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">AI Integration</a></li>
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">Cost Analytics</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 font-headline">Company</h5>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">About Us</a></li>
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">Careers</a></li>
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-blue-400 transition-colors duration-300" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6 font-headline">Newsletter</h5>
          <p className="text-slate-500 text-sm mb-4">Cloud insights delivered monthly.</p>
          <div className="flex gap-2">
            <input className="bg-surface-container-low border border-white/10 rounded-lg px-3 py-2 text-xs outline-none w-full focus:border-primary/50 transition-colors" placeholder="Email" type="email" />
            <button className="bg-primary text-on-primary px-3 py-2 rounded-lg text-xs font-bold transition-transform hover:scale-105 active:scale-95">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>© 2024 Dazk Architecture. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-white transition-colors duration-300" href="#">Security Documentation</a>
          <a className="hover:text-white transition-colors duration-300" href="#">Status Page</a>
        </div>
      </div>
    </footer>
  );
}
