const testimonials = [
  {
    quote:
      'Eu achava que Sociologia era coisa de quem mora em cidade grande. Aí o professor mostrou que o que acontece comigo no aplicativo de entrega tem nome: uberização. Mudou tudo.',
    name: 'Kaique',
    meta: '19 anos, Patos-PB, 1º período',
    initial: 'K',
  },
  {
    quote:
      'Cheguei na UFCG sem entender nada de teoria. O Dashboard me mostrou que Marx estava falando do motoboy da minha rua. Agora consigo ler os textos sem travar.',
    name: 'Isabela',
    meta: '20 anos, Sousa-PB, 1º período',
    initial: 'I',
  },
  {
    quote:
      'O que mais me ajudou foi ver que o Sertão não está fora do capitalismo — ele está dentro, pela porta dos fundos. Isso eu aprendi aqui antes de aprender em qualquer livro.',
    name: 'Tarcísio',
    meta: '21 anos, Cajazeiras-PB, 2º período',
    initial: 'T',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
            Prova Social
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            O que dizem os alunos do Sertão
          </h2>
          <p className="mt-3 text-xs font-mono text-gray-500">
            Depoimentos ilustrativos — a serem substituídos por reais após o
            curso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-panel p-6 rounded-xl flex flex-col gap-4">
              <svg
                className="w-8 h-8 text-indigo-500/50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-300 leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center font-mono text-sm text-indigo-300 font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="font-mono text-xs text-gray-500">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
