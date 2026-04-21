const issues = [
  {
    id: '01',
    tag: 'Viés Algorítmico',
    tagColor: 'text-red-400',
    dotColor: 'bg-red-400',
    title: 'O dataset reflete o mundo. Se o mundo é desigual, o modelo aprende a desigualdade.',
    desc: 'Modelos de linguagem são treinados em texto humano. Texto humano carrega estrutura de classe, raça e gênero. Isso não é bug — é design.',
  },
  {
    id: '02',
    tag: 'Impacto Real',
    tagColor: 'text-orange-400',
    dotColor: 'bg-orange-400',
    title: 'Algoritmos de crédito, saúde e justiça criminal já tomam decisões sobre vidas humanas.',
    desc: 'COMPAS, sistemas de concessão de crédito, triagem de currículos. O código que você vai escrever vai operar nesse campo — queira ou não.',
  },
  {
    id: '03',
    tag: 'Ponto Cego Técnico',
    tagColor: 'text-yellow-400',
    dotColor: 'bg-yellow-400',
    title: 'Ética em IA não aparece em Algoritmos nem em Estruturas de Dados.',
    desc: 'A grade curricular de TI entrega a ferramenta sem entregar a pergunta: "para quem esse sistema vai servir, e quem ele vai prejudicar?"',
  },
  {
    id: '04',
    tag: 'Reprodução de Classe',
    tagColor: 'text-indigo-400',
    dotColor: 'bg-indigo-400',
    title: 'O ChatGPT que você usa todo dia não responde igual para todo mundo.',
    desc: 'Declare renda baixa, escolaridade básica e localização periférica — e compare as respostas com um perfil de alta renda. Os dados são os mesmos. O tratamento, não.',
  },
  {
    id: '05',
    tag: 'Responsabilidade',
    tagColor: 'text-violet-400',
    dotColor: 'bg-violet-400',
    title: 'Quando você lança um sistema sem entender isso, você não é neutro. Você é cúmplice.',
    desc: 'Neutralidade técnica é uma posição política. Desenvolvedores que ignoram impacto social não estão fora do problema — estão dentro dele, construindo a infraestrutura.',
  },
]

export default function Problem() {
  return (
    <section id="problema" className="py-24 px-6 bg-[#0a0f1e]">
      <div className="section-divider mb-24" />
      <div className="max-w-5xl mx-auto">

        <div className="mb-14">
          <span className="font-mono text-xs text-red-400 uppercase tracking-[0.15em]">
            O que ninguém te contou na grade de TI
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white max-w-2xl leading-tight tracking-tight">
            5 questões que a Sociologia coloca sobre algoritmos e desigualdade
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {issues.map((item) => (
            <div key={item.id} className="glass-panel p-5 sm:p-6 rounded-xl flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex-shrink-0 flex items-center gap-3 sm:w-56">
                <span className="font-mono text-xs text-slate-700">{item.id}</span>
                <span className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider ${item.tagColor}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} opacity-70`} />
                  {item.tag}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold leading-snug mb-2 text-[0.95rem]">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
