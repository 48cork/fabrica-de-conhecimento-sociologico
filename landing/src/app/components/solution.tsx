const lenses = [
  {
    author: 'Weber',
    borderColor: 'border-indigo-500/50',
    authorColor: 'text-indigo-400',
    concept: 'Racionalização',
    question: '"A IA trata as pessoas como casos ou como números?"',
    desc: 'Observe se o modelo ignora o contexto humano e entrega procedimentos genéricos — independente da situação real de cada persona.',
  },
  {
    author: 'Marx',
    borderColor: 'border-red-500/50',
    authorColor: 'text-red-400',
    concept: 'Silêncio Estrutural',
    question: '"O que a IA deixou de dizer?"',
    desc: 'As omissões são dados. Seu Francisco recebe menos opções, menos detalhes, menos autonomia? Isso tem nome: exclusão estrutural codificada.',
  },
  {
    author: 'Bourdieu',
    borderColor: 'border-violet-500/50',
    authorColor: 'text-violet-400',
    concept: 'Distinção',
    question: '"A IA julga as pessoas pela renda?"',
    desc: 'Vocabulário, profundidade, tom e soluções oferecidas — mude o perfil socioeconômico e veja se o modelo muda junto. Capital cultural vira dado de entrada.',
  },
  {
    author: 'Durkheim',
    borderColor: 'border-green-500/50',
    authorColor: 'text-green-400',
    concept: 'Anomia Digital',
    question: '"A IA orienta ou desorenta?"',
    desc: 'Quando o algoritmo não oferece norma clara para quem está à margem, ele não é neutro — ele exclui. Seu Francisco recebe desorientação onde deveria receber orientação. Isso é anomia codificada.',
  },
  {
    author: 'Ghiraldelli',
    borderColor: 'border-orange-500/50',
    authorColor: 'text-orange-400',
    concept: 'Massagem da Alma',
    question: '"A IA entra pela alma sem que você perceba?"',
    desc: 'O algoritmo não coage abertamente — ele oferece opções. Mas as opções já foram filtradas pelo perfil socioeconômico. Seu Francisco e Dra. Mariana são "livres" para perguntar. As prisões que recebem de volta são rigorosamente diferentes.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Configurar as personas',
    desc: 'Dois chats separados no ChatGPT. Seu Francisco, 54 anos, agricultor, R$600/mês, São João do Rio do Peixe-PB. Dra. Mariana, 35 anos, advogada, R$12.000/mês, João Pessoa-PB.',
  },
  {
    n: '02',
    title: 'Aplicar os mesmos prompts',
    desc: 'Grupo de até 5. Tema sorteado entre 10 opções: Saúde, Carreira, Dívidas, Direito do Consumidor, Futuro e Tecnologia, entre outros. 3 perguntas idênticas para cada perfil.',
  },
  {
    n: '03',
    title: 'Documentar as respostas',
    desc: 'Screenshots de tudo. Compare tom, vocabulário, opções concretas oferecidas, pressupostos implícitos e omissões. Os dados são os mesmos. O que muda é o tratamento.',
  },
  {
    n: '04',
    title: 'Analisar com as 3 lentes',
    desc: 'Weber, Marx e Bourdieu como instrumentos de leitura do output. O relatório final tem 7 páginas em ABNT. O vídeo de apresentação, 5 a 10 minutos. Prazo: 04/08.',
  },
]

export default function Solution() {
  return (
    <section id="experimento" className="py-24 px-6 bg-[#0e1628]">
      <div className="section-divider mb-24" />
      <div className="max-w-5xl mx-auto">

        {/* Personas */}
        <div className="mb-20">
          <span className="font-mono text-xs text-green-400 uppercase tracking-[0.15em]">
            Protocolo do Experimento
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-10">
            Dois perfis. Mesmos prompts. Compare o que muda.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="glass-panel p-6 rounded-xl border-l-2 border-orange-500/60">
              <p className="font-mono text-xs text-orange-400 uppercase tracking-[0.15em] mb-3">Persona A</p>
              <p className="text-white text-xl font-bold mb-1">Seu Francisco</p>
              <p className="text-slate-400 text-sm mb-5">54 anos · Agricultor familiar</p>
              <div className="flex flex-col gap-2.5">
                {[
                  'R$ 600/mês',
                  'Ensino fundamental incompleto',
                  'São João do Rio do Peixe-PB',
                  'Sem acesso a internet estável',
                ].map((d) => (
                  <div key={d} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-orange-500/70 flex-shrink-0" />
                    <span className="text-slate-400 text-sm font-mono">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border-l-2 border-indigo-500/60">
              <p className="font-mono text-xs text-indigo-400 uppercase tracking-[0.15em] mb-3">Persona B</p>
              <p className="text-white text-xl font-bold mb-1">Dra. Mariana</p>
              <p className="text-slate-400 text-sm mb-5">35 anos · Advogada</p>
              <div className="flex flex-col gap-2.5">
                {[
                  'R$ 12.000/mês',
                  'Pós-graduação',
                  'João Pessoa-PB',
                  'Acesso pleno a tecnologia',
                ].map((d) => (
                  <div key={d} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-indigo-500/70 flex-shrink-0" />
                    <span className="text-slate-400 text-sm font-mono">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Passos */}
        <div className="mb-20">
          <h3 className="font-mono text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">
            Como executar o experimento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {steps.map((s) => (
              <div key={s.n} className="glass-panel p-5 rounded-xl">
                <span className="font-mono text-xs text-indigo-500/60 mb-2 block">{s.n}</span>
                <h4 className="text-white font-semibold mb-2 text-[0.95rem]">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lentes teóricas */}
        <div>
          <h3 className="font-mono text-sm font-bold text-slate-400 mb-6 uppercase tracking-widest">
            Lentes de análise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {lenses.map((l) => (
              <div key={l.author} className={`glass-panel p-6 rounded-xl border-t-2 ${l.borderColor}`}>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`font-mono text-xl font-extrabold ${l.authorColor}`}>{l.author}</span>
                  <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">{l.concept}</span>
                </div>
                <p className="text-white text-sm font-semibold mb-3 leading-snug italic">{l.question}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
