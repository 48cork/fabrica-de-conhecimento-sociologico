export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950/30 to-gray-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-indigo-300 uppercase tracking-widest">
            Dashboard AIOX v2.0 — Ativo
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          A Sociologia já estava no seu{' '}
          <span className="text-indigo-400">celular</span> antes de você entrar
          na UFCG.
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Você só não sabia o nome do que estava vivendo.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#formulario"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 text-center"
          >
            ENTRAR NA FÁBRICA →
          </a>
          <a
            href="#problema"
            className="w-full sm:w-auto px-8 py-4 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-mono rounded-lg transition-all duration-200 text-center backdrop-blur-sm"
          >
            Entender mais
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
