export default function Footer() {
  return (
    <footer className="bg-obsidian-deep py-20 px-4 md:px-10 border-t border-obsidian-carbon">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/images/logo.jpg"
              alt="Concept Fitness Logo"
              className="w-16 h-16 object-contain brightness-200 rounded-full"
            />
            <span className="text-obsidian-white text-xl font-bold uppercase tracking-tighter">
              Concept <span className="text-[#C0FF00]">Fitness</span>
            </span>
          </div>
          <p className="text-obsidian-silver text-sm font-light leading-relaxed">
            Nerópolis — GO <br />
            Rua Saturnino José Araújo, nº 250 <br />
            Botafogo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="text-obsidian-white uppercase text-xs tracking-widest mb-2 font-bold">Conecte-se</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/conceptfitness__/"
                target="_blank"
                className="flex items-center gap-3 text-obsidian-silver hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-obsidian-carbon flex items-center justify-center group-hover:bg-white group-hover:text-obsidian-deep transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4.004-1.795-4.004-4.004 0-2.209 1.795-4.004 4.004-4.004 2.209 0 4.004 1.795 4.004 4.004 0 2.209-1.795 4.004-4.004 4.004z"/></svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://wa.me/5562982396113?text=Olá!%20Vim%20pelo%20site%20da%20Concept%20Fitness%20e%20gostaria%20de%20agendar%20minha%20aula."
                target="_blank"
                className="flex items-center gap-3 text-obsidian-silver hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-obsidian-carbon flex items-center justify-center group-hover:bg-white group-hover:text-obsidian-deep transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.13-5.337c.001-5.45 4.436-9.88 9.888-9.88 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.982c-.003 5.45-4.437 9.88-9.889 9.88z"/></svg>
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
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
