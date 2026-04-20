export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-green-400 uppercase tracking-widest">
              Sistema Ativo
            </span>
          </div>
        </div>

        <div className="text-center">
          <p className="font-mono text-xs text-gray-600 uppercase tracking-widest">
            Fábrica de Conhecimento Sociológico
          </p>
          <p className="font-mono text-xs text-gray-700 mt-1">
            UFCG · Sertão Paraibano · Motor AIOX v2.0
          </p>
        </div>

        <div className="font-mono text-xs text-gray-700 text-right">
          <span className="text-indigo-500/50">AIOX</span>
          <span className="text-gray-700"> v2.0</span>
        </div>
      </div>
    </footer>
  )
}
