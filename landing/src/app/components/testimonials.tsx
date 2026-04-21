const findings = [
  {
    persona: 'Dra. Mariana',
    theme: 'Saúde Mental',
    tag: 'Capital Cultural',
    tagColor: 'text-indigo-400',
    tagBg: 'bg-indigo-500/10 border-indigo-500/20',
    finding:
      'Para a advogada, o modelo listou 6 tipos de terapia com diferenciação técnica, sugeriu plataformas de agendamento online e usou vocabulário clínico. Para o agricultor, perguntado sobre o mesmo tema, recebeu: "procure um posto de saúde." Uma frase. Sem nome, sem endereço, sem alternativa.',
    lens: 'Bourdieu — Distinção',
    lensColor: 'text-violet-400',
  },
  {
    persona: 'Seu Francisco',
    theme: 'Dívidas',
    tag: 'Silêncio Estrutural',
    tagColor: 'text-red-400',
    tagBg: 'bg-red-500/10 border-red-500/20',
    finding:
      'Ao mencionar renda de R$600 e dívida de R$800, o modelo não citou nenhum direito do devedor, nenhum programa de renegociação público, nenhuma entidade de assistência. Para Dra. Mariana com dívida equivalente em proporção: 4 estratégias de negociação, 2 referências legais e linguagem de autonomia financeira.',
    lens: 'Marx — Exclusão Estrutural',
    lensColor: 'text-red-400',
  },
  {
    persona: 'Ambas as Personas',
    theme: 'Futuro e Tecnologia',
    tag: 'Racionalização',
    tagColor: 'text-yellow-400',
    tagBg: 'bg-yellow-500/10 border-yellow-500/20',
    finding:
      'Para a mesma pergunta sobre IA e trabalho, o modelo respondeu à advogada com cenários de adaptação e oportunidade. Para o agricultor, com descrição impessoal de automação sem qualquer sujeito ativo — como se a transformação tecnológica simplesmente acontecesse, sem agentes, sem política, sem escolha.',
    lens: 'Weber — Racionalização',
    lensColor: 'text-indigo-400',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0a0f1e]">
      <div className="section-divider mb-24" />
      <div className="max-w-5xl mx-auto">

        <div className="mb-14">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-[0.15em]">
            Preview dos Dados
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que o experimento revela
          </h2>
          <p className="mt-3 text-sm font-mono text-slate-500">
            Achados ilustrativos baseados no protocolo — os dados reais serão produzidos pela sua turma em 15/07
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {findings.map((f) => (
            <div key={f.theme} className="glass-panel p-6 sm:p-8 rounded-xl">
              {/* Cabeçalho do card */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                  {f.theme}
                </span>
                <span className="text-slate-700">·</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded border font-mono text-xs uppercase tracking-wider ${f.tagColor} ${f.tagBg}`}>
                  {f.tag}
                </span>
                <span className="text-slate-700">·</span>
                <span className={`font-mono text-xs ${f.lensColor}`}>{f.lens}</span>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5 text-[0.95rem]">{f.finding}</p>

              <div className="flex items-center gap-2 pt-4 border-t border-white/6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
                <span className="font-mono text-xs text-slate-600">
                  Persona: {f.persona}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Nota metodológica */}
        <div className="mt-6 glass-panel p-5 rounded-xl border border-indigo-500/15">
          <p className="font-mono text-xs text-slate-400 leading-relaxed">
            <span className="text-indigo-300 font-bold">Nota metodológica —</span>{' '}
            Os dados acima são ilustrativos. Os achados reais serão produzidos pelas
            turmas em sala. Cada grupo trabalha com um tema sorteado. O corpus
            completo alimenta a pesquisa do Prof. Sergio Farias sobre colonialismo
            algorítmico no Sul Global.
          </p>
        </div>
      </div>
    </section>
  )
}
