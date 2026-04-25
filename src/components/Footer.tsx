const Footer = () => (
  <footer className="bg-slate-900 text-white pt-12 md:pt-24 pb-8 md:pb-12 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-16">
        <div className="col-span-2">
          <img
              src="/canxest-logo.png"
              alt="Canxest Healthcare"
              className="h-[67px] w-auto object-contain mb-6"
            />
          <p className="text-slate-400 max-w-sm mb-1">
            Expert surgical oncology care by Dr. Nischal Raj L 18+ years, 5,000+ surgeries, Mysore.
          </p>
          <p className="text-accent text-sm italic font-medium mb-8">"Choose Well, Be Well"</p>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Oncology</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Chemotherapy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Immunotherapy</a></li>
            <li><a href="#" className="hover:text-white transition-colors"></a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6"></h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors"></a></li>
            <li><a href="#" className="hover:text-white transition-colors"></a></li>
            <li><a href="#" className="hover:text-white transition-colors"></a></li>
            <li><a href="#" className="hover:text-white transition-colors"></a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <p>© 2026 Canxest Healthcare. All rights reserved.</p>
        <div className="flex gap-8">
          <span>Doctor-reviewed</span>
          <span>NABL Partner Labs</span>
          <span>Strict Data Privacy</span>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
      <span className="text-[15vw] font-black text-white/[0.02] leading-none block text-center translate-y-1/4">
        Canxest
      </span>
    </div>
  </footer>
);

export default Footer;
