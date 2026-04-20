const problems = [
  {
    num: '01',
    title: '"Os textos são impossíveis."',
    desc: 'Você abre o PDF da ementa e parece outro idioma. Durkheim, Marx, Weber — nomes que não dizem nada ainda, mas que vão cair na prova.',
  },
  {
    num: '02',
    title: '"Não vejo relação com a minha vida."',
    desc: 'O professor fala de revolução industrial, você pensa no iFood. Ninguém fez essa ponte ainda.',
  },
  {
    num: '03',
    title: '"Cheguei do interior e me sinto perdido aqui."',
    desc: 'A universidade tem um ritmo que ninguém te ensinou. A biblioteca, o sistema, os professores — tudo parece feito pra quem já sabia.',
  },
  {
    num: '04',
    title: '"Trabalho pra pagar o curso e mal tenho tempo de estudar."',
    desc: 'Entre o bico, a condução e a família, o tempo de estudo é o que sobra — e quase nunca sobra nada.',
  },
  {
    num: '05',
    title: '"Sinto que Sociologia é só teoria, não resolve nada."',
    desc: 'Você entrou com dúvida se valeu a pena. O curso parece distante do mercado, do território, da realidade do Sertão.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
            Diagnóstico
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            5 dores que o calouro de Sociologia da UFCG reconhece
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <div
              key={p.num}
              className={`glass-panel p-6 rounded-xl ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <span className="font-mono text-xs text-indigo-400/60 mb-3 block">
                {p.num}
              </span>
              <h3 className="text-white font-semibold mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
