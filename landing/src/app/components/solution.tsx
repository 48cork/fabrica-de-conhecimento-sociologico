const benefits = [
  {
    icon: '◈',
    color: 'text-indigo-400',
    title: 'Teoria traduzida para o seu território',
    desc: 'Os clássicos (Marx, Weber, Durkheim) lidos a partir do Sertão Paraibano — com exemplos reais de Campina Grande, Patos e do interior.',
  },
  {
    icon: '◉',
    color: 'text-blue-400',
    title: 'Análises do presente que você já vive',
    desc: 'Uberização, plataformas digitais, exclusão digital — tratados como temas sociológicos, não como novidade de TED Talk.',
  },
  {
    icon: '◎',
    color: 'text-green-400',
    title: 'Ferramentas para pensar, não respostas para decorar',
    desc: 'O Dashboard AIOX entrega perguntas que mudam a forma como você lê a realidade. A teoria vira instrumento, não obstáculo.',
  },
  {
    icon: '◐',
    color: 'text-indigo-300',
    title: 'Acesso contínuo aos materiais do curso',
    desc: 'Insights, análises territoriais e sínteses dos autores disponíveis sempre — mesmo com dados limitados, mesmo fora do horário de aula.',
  },
]

export default function Solution() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-green-400 uppercase tracking-widest">
            Solução
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            4 benefícios do Dashboard AIOX v2.0
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Uma ferramenta construída para quem chegou do Sertão e quer entender
            o mundo a partir dali.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="glass-panel p-8 rounded-xl group hover:border-indigo-500/30 transition-colors duration-300">
              <div className={`text-3xl mb-4 ${b.color}`}>{b.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {b.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
