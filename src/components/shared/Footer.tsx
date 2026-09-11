export default function Footer() {
  return (
    <footer className="bg-obsidian-deep py-20 px-4 md:px-10 border-t border-obsidian-carbon">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <h2 className="text-obsidian-white text-2xl font-black uppercase tracking-tighter mb-4">
            Concept Fitness
          </h2>
          <p className="text-obsidian-silver text-sm font-light leading-relaxed">
            Nerópolis — GO <br />
            Rua Saturnino José Araújo, nº 250 <br />
            Botafogo
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div>
            <h4 className="text-obsidian-white uppercase text-xs tracking-widest mb-6 font-bold">Connect</h4>
            <ul className="text-obsidian-silver text-sm space-y-4 font-light">
              <li><a href="https://www.instagram.com/conceptfitness__/" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/5562982396113" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-obsidian-white uppercase text-xs tracking-widest mb-6 font-bold">Legal</h4>
            <ul className="text-obsidian-silver text-sm space-y-4 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-obsidian-carbon flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-obsidian-silver text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Concept Fitness. All rights reserved.
        </p>
        <p className="text-obsidian-silver text-[10px] uppercase tracking-widest font-mono">
          Designed for Peak Performance
        </p>
      </div>
    </footer>
  );
}
