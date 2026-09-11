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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div>
            <h4 className="text-obsidian-white uppercase text-xs tracking-widest mb-6 font-bold">Conecte-se</h4>
            <ul className="text-obsidian-silver text-sm space-y-4 font-light">
              <li>
                <a href="https://www.instagram.com/conceptfitness__/" target="_blank" className="group flex items-center gap-2 hover:text-white transition-colors">
                  <span className="text-[10px] uppercase tracking-tighter opacity-60 group-hover:opacity-100">Veja mais da Concept →</span>
                  <span className="font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5562982396113?text=Olá!%20Vim%20pelo%20site%20da%20Concept%20Fitness%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental." target="_blank" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-obsidian-white uppercase text-xs tracking-widest mb-6 font-bold">Localização</h4>
            <ul className="text-obsidian-silver text-sm space-y-4 font-light">
              <li><a href="https://maps.app.goo.gl/aDxsevwjgn4xu71y7" target="_blank" className="hover:text-white transition-colors">Google Maps</a></li>
              <li><a href="https://waze.com/ul?q=Rua%20Saturnino%20José%20Araújo%20250%20Botafogo%20Nerópolis%20GO" target="_blank" className="hover:text-white transition-colors">Waze</a></li>
              <li><a href="http://maps.apple.com/?q=Rua%20Saturnino%20José%20Araújo%20250%20Botafogo%20Nerópolis%20GO" target="_blank" className="hover:text-white transition-colors">Apple Maps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-obsidian-white uppercase text-xs tracking-widest mb-6 font-bold">Jurídico</h4>
            <ul className="text-obsidian-silver text-sm space-y-4 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-obsidian-carbon flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-obsidian-silver text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Concept Fitness. Todos os direitos reservados.
        </p>
        <p className="text-obsidian-silver text-[10px] uppercase tracking-widest font-mono">
          Projetado para Performance Máxima
        </p>
      </div>
    </footer>
  );
}
