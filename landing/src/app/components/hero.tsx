export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0a0f1e]">
      {/* Glow de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-700/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">

        {/* Badge verde pulsante */}
        <div className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-green-500/25 bg-green-500/8">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
          <span className="font-mono text-xs text-green-400 uppercase tracking-[0.15em]">
            Experimento Ativo — A IA Tem Classe Social?
          </span>
        </div>

        {/* Headline principal */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
          Você vai construir algoritmos.{' '}
          <span className="text-indigo-400">
            Eles já têm classe social
          </span>{' '}
          antes de você escrever uma palavra no ChatGPT.
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl leading-relaxed mb-4">
          Este semestre você vai testar o ChatGPT com dois perfis opostos —
          um agricultor de R$600/mês e uma advogada de R$12.000/mês — e analisar
          o que o modelo responde diferente para cada um usando Marx, Weber e Durkheim.
        </p>

        <p className="text-base text-slate-500 max-w-2xl leading-relaxed mb-12">
          Não é uma aula de Sociologia distante da sua área. É uma aula sobre
          os sistemas que você vai construir.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-3">
          <a
            href="#experimento"
            className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-semibold rounded-lg transition-colors duration-200 hover:shadow-xl hover:shadow-indigo-500/20 text-sm"
          >
            VER O EXPERIMENTO →
          </a>
          <a
            href="#cadastro"
            className="px-7 py-3.5 border border-white/12 hover:border-indigo-400/40 text-slate-300 hover:text-white font-mono text-sm rounded-lg transition-colors duration-200"
          >
            CADASTRAR E-MAIL
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-8 border-t border-white/6 grid grid-cols-3 gap-6 max-w-sm">
          {[
            { label: 'Turmas', value: '4' },
            { label: 'Encontros', value: '66' },
            { label: 'Horas', value: '60h' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-indigo-400 font-mono leading-none">{s.value}</p>
              <p className="text-xs text-slate-500 font-mono mt-1.5 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
