'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function LeadForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setStatus('loading')

    const { error } = await supabase.from('leads').insert({ nome, email })

    if (!error) {
      setStatus('success')
      setNome('')
      setEmail('')
      return
    }

    if (error.code === '23505') {
      setStatus('duplicate')
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="cadastro" className="py-24 px-6 bg-[#0e1628]">
      <div className="section-divider mb-24" />
      <div className="max-w-lg mx-auto">

        <div className="mb-10">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-[0.15em]">
            Acesso aos Materiais
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cadastre seu e-mail.
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Acesse os materiais do experimento, análises e atualizações do curso —
            direto no seu e-mail.
          </p>
        </div>

        <div className="glass-panel p-7 rounded-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-mono text-green-400 font-semibold text-lg mb-2">
                Cadastro realizado.
              </p>
              <p className="font-mono text-slate-500 text-sm">
                Você vai receber os materiais no e-mail informado.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block font-mono text-xs text-slate-400 uppercase tracking-[0.12em] mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/4 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/6 transition-all duration-150 text-sm"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 uppercase tracking-[0.12em] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/4 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/6 transition-all duration-150 text-sm"
                />
              </div>

              {status === 'error' && (
                <p className="font-mono text-xs text-red-400 text-center">
                  Algo deu errado. Tente novamente.
                </p>
              )}
              {status === 'duplicate' && (
                <p className="font-mono text-xs text-yellow-400 text-center">
                  Este e-mail já está cadastrado.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-mono font-semibold rounded-lg transition-colors duration-150 hover:shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center gap-2 text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processando...
                  </>
                ) : (
                  'ACESSAR OS MATERIAIS →'
                )}
              </button>

              <p className="text-center font-mono text-xs text-slate-600">
                Sem spam. Sem lista de terceiros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
