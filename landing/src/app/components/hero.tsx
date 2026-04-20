export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/20 to-gray-950" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-green-400 uppercase tracking-widest">
            Experimento Ativo — A IA Tem Classe Social?
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Você vai construir algoritmos.{' '}
          <span className="text-indigo-400">
            Eles já têm classe social
          </span>{' '}
          antes de você escrever uma linha de código.
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl leading-relaxed mb-4">
          Este semestre você vai testar o ChatGPT com dois perfis opostos —
          um agricultor de R$600/mês e uma advogada de R$12.000/mês — e analisar
          o que o modelo responde diferente para cada um usando Marx, Weber e Durkheim.
        </p>

        <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-10">
          Não é uma aula de Sociologia distante da sua área. É uma aula sobre
          os sistemas que você vai construir.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#experimento"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            VER O EXPERIMENTO →
          </a>
          <a
            href="#cadastro"
            className="px-8 py-4 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-mono rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            CADASTRAR E-MAIL
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { label: 'Turmas', value: '4' },
            { label: 'Encontros', value: '66' },
            { label: 'Carga Horária', value: '60h' },
          ].map((s) => (
            <div key={s.label} className="glass-panel rounded-lg px-4 py-3 text-center">
              <p className="text-2xl font-bold text-indigo-400 font-mono">{s.value}</p>
              <p className="text-xs text-gray-500 font-mono mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
