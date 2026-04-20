const links = [
  { label: 'Introdução à Sociologia', code: '2101107 / 2101000' },
  { label: 'Fund. do Pensamento Sociológico', code: '2101106' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-950 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-400 uppercase tracking-widest">
                Sistema Ativo
              </span>
            </div>
            <p className="font-mono text-xs text-gray-600 mt-1">Motor AIOX v2.0</p>
          </div>

          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <div key={l.code} className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-500">{l.label}</span>
                <span className="font-mono text-xs text-indigo-500/50">{l.code}</span>
              </div>
            ))}
          </div>

          <div className="text-right">
            <p className="font-mono text-xs text-gray-600">
              Universidade Federal de Campina Grande
            </p>
            <p className="font-mono text-xs text-gray-700 mt-1">
              Prof. Sergio Farias · 2026.1
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <p className="font-mono text-xs text-gray-700 max-w-2xl leading-relaxed">
            Os dados coletados no experimento alimentam pesquisa sobre colonialismo
            algorítmico no Sul Global. Relatórios são anonimizados salvo autorização
            explícita do aluno. Sem impacto na nota.
          </p>
        </div>
      </div>
    </footer>
  )
}
