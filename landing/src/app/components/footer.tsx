const courses = [
  { label: 'Introdução à Sociologia', code: '2101107 / 2101000' },
  { label: 'Fund. do Pensamento Sociológico', code: '2101106' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0a0f1e] border-t border-white/6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

        {/* Status */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
            <span className="font-mono text-xs text-green-400 uppercase tracking-[0.12em]">
              Sistema Ativo
            </span>
          </div>
          <p className="font-mono text-xs text-slate-700 mt-1">Motor AIOX v2.0</p>
        </div>

        {/* Disciplinas */}
        <div className="flex flex-col gap-1.5">
          {courses.map((c) => (
            <div key={c.code} className="flex items-center gap-3">
              <span className="font-mono text-xs text-slate-500">{c.label}</span>
              <span className="font-mono text-xs text-indigo-600/60">{c.code}</span>
            </div>
          ))}
        </div>

        {/* Identificação */}
        <div className="text-right">
          <p className="font-mono text-xs text-slate-600">
            Universidade Federal de Campina Grande
          </p>
          <p className="font-mono text-xs text-slate-700 mt-1">
            Prof. Sergio Farias · 2026.1
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5">
        <p className="font-mono text-xs text-slate-700 max-w-2xl leading-relaxed">
          Os dados coletados no experimento alimentam pesquisa sobre colonialismo
          algorítmico no Sul Global. Relatórios são anonimizados salvo autorização
          explícita do aluno. Sem impacto na nota.
        </p>
      </div>
    </footer>
  )
}
