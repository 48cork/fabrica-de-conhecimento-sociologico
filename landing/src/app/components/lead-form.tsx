'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function LeadForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [emailError, setEmailError] = useState('')

  function validateEmail(value: string) {
    if (!value.includes('@ufcg.edu.br') && !value.includes('@estudante.ufcg.edu.br')) {
      setEmailError('Use seu e-mail institucional (@ufcg.edu.br ou @estudante.ufcg.edu.br)')
      return false
    }
    setEmailError('')
    return true
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validateEmail(email)) return

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
    <section id="formulario" className="py-24 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
            Acesso
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Entre na Fábrica.
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Acesse os materiais, análises e atualizações do curso.
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-mono text-green-400 font-semibold text-lg">
                Cadastro realizado. Bem-vindo à Fábrica.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">
                  E-mail institucional
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (emailError) validateEmail(e.target.value)
                  }}
                  onBlur={(e) => validateEmail(e.target.value)}
                  placeholder="nome@ufcg.edu.br"
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-600 focus:outline-none transition-all duration-200 ${
                    emailError
                      ? 'border-red-500/60 focus:border-red-500'
                      : 'border-white/10 focus:border-indigo-500/60 focus:bg-white/8'
                  }`}
                />
                {emailError && (
                  <p className="mt-1.5 font-mono text-xs text-red-400">{emailError}</p>
                )}
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
                className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-mono font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2"
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
                  'ENTRAR NA FÁBRICA →'
                )}
              </button>

              <p className="text-center font-mono text-xs text-gray-600">
                Seus dados ficam só aqui. Sem spam. Sem lista de terceiros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
