# PRD — Landing Page: Fábrica de Conhecimento Sociológico
**Versão:** 1.0
**Data:** 2026-04-08
**Motor:** AIOX v2.0 | **Branch:** main
**Status:** Pronto para desenvolvimento

---

## 1. VISÃO GERAL DO PRODUTO

A **Landing Page da Fábrica de Conhecimento Sociológico** é o ponto de entrada digital do curso para calouros de Sociologia da UFCG. Seu objetivo é converter visitantes em leads qualificados — alunos que se identificam com o problema, compreendem a proposta e cadastram seu e-mail institucional para acessar os materiais do curso.

A página deve comunicar em segundos que a Sociologia explica a vida real do estudante do Sertão Paraibano — o celular, o trabalho, o território — e que o Dashboard AIOX v2.0 é a ferramenta para essa leitura.

---

## 2. PROBLEMA QUE RESOLVE

Calouros de Sociologia chegam à universidade desconectados da teoria e sem perceber que ela já opera na vida deles. A página resolve dois problemas simultâneos:

- **Para o aluno:** quebra a barreira de entrada na teoria sociológica, mostrando relevância imediata para sua realidade
- **Para o curso:** gera uma base de contatos qualificados (leads) com e-mail institucional para comunicação e acompanhamento ao longo do semestre

---

## 3. PÚBLICO-ALVO

**Primário:** Calouros de Sociologia da UFCG (1º período)
- Origem: Sertão Paraibano (Campina Grande, Patos, Sousa, Cajazeiras e interior)
- Perfil digital: conectados via smartphone, consumo de conteúdo em formato curto (Reels, TikTok)
- Perfil acadêmico: primeiro contato com teoria social, pouca familiaridade com linguagem acadêmica
- Contexto econômico: maioria trabalha ou já trabalhou de forma informal ou por plataforma

**Secundário:** Professores e tutores que indicam o recurso como material complementar

---

## 4. FUNCIONALIDADES OBRIGATÓRIAS

### 4.1 Landing Page com Copy Aprovada
- Utilizar integralmente o conteúdo de `docs/copy/fabrica-sociologica-landing.md`
- Estrutura obrigatória da página (nesta ordem):
  1. **Hero** — Headline + Subheadline
  2. **Problema** — 5 dores do calouro (cards ou lista destacada)
  3. **Solução** — 4 benefícios do Dashboard AIOX v2.0
  4. **Prova Social** — 3 depoimentos fictícios de alunos do Sertão PB
  5. **Formulário** — Captura de nome + e-mail institucional
  6. **Rodapé** — Identificação do projeto e motor AIOX v2.0

### 4.2 Formulário de Captura
- Campos obrigatórios:
  - `Nome completo` (text, required)
  - `E-mail institucional` (email, required)
- Validação client-side: e-mail deve conter `@ufcg.edu.br` ou `@estudante.ufcg.edu.br`
- CTA: botão "ENTRAR NA FÁBRICA →"
- Estados do botão: padrão → loading → sucesso / erro
- Mensagem de sucesso: "Cadastro realizado. Bem-vindo à Fábrica."
- Mensagem de erro: "Algo deu errado. Tente novamente."

### 4.3 Integração Supabase
- Tabela: `leads`
- Schema:

```sql
create table leads (
  id uuid default gen_random_uuid() primary key,
  nome text not null,
  email text not null unique,
  created_at timestamp with time zone default now()
);
```

- Inserção via Supabase JS client (anon key, RLS habilitado)
- RLS Policy: `INSERT` permitido para `anon`, `SELECT` apenas para `authenticated`
- Variáveis de ambiente: `SUPABASE_URL` e `SUPABASE_ANON_KEY` (não commitar no repositório)

### 4.4 Estética Glassmorphism — AIOX v2.0
- Alinhada visualmente ao widget Squad Monitor já existente em `index.html`
- Padrão visual obrigatório:
  - Background: gradiente escuro (`bg-gray-900` ou similar)
  - Cards/painéis: `backdrop-filter: blur(16px)`, fundo semitransparente, borda `rgba(255,255,255,0.15)`
  - Tipografia: `font-mono` para labels e badges, sans-serif para corpo
  - Cores de destaque: índigo (`#6366f1`), verde (`#22c55e`), azul (`#60a5fa`)
  - Indicadores de status: pontos pulsantes (mesma animação do widget)
- Referência de implementação: classe `.glass-panel` já definida em `index.html`

---

## 5. CRITÉRIOS DE ACEITAÇÃO

| # | Critério | Como verificar |
|---|---|---|
| AC-01 | Página carrega em menos de 3s em conexão 3G | Lighthouse / DevTools Network |
| AC-02 | Copy idêntica ao arquivo `docs/copy/fabrica-sociologica-landing.md` | Revisão manual |
| AC-03 | Formulário valida e-mail institucional antes de enviar | Testar e-mail sem `@ufcg.edu.br` |
| AC-04 | Lead é inserido na tabela `leads` do Supabase ao submeter | Verificar painel Supabase |
| AC-05 | Erro de e-mail duplicado exibe mensagem amigável, não quebra a página | Cadastrar mesmo e-mail duas vezes |
| AC-06 | Página responsiva em mobile (375px) e desktop (1280px) | DevTools responsive mode |
| AC-07 | Estética glassmorphism consistente com o widget AIOX em `index.html` | Revisão visual |
| AC-08 | Nenhuma credencial do Supabase exposta no código commitado | `git grep SUPABASE` no histórico |
| AC-09 | Estados do botão (loading/sucesso/erro) funcionam corretamente | Teste manual do fluxo |
| AC-10 | Página acessível via GitHub Pages ou servidor estático | Acesso via URL pública |

---

## 6. STACK TÉCNICA

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Markup | HTML5 | Consistência com `index.html` existente |
| Estilo | Tailwind CSS (CDN) | Já em uso no projeto, sem build step |
| Interatividade | JavaScript vanilla | Sem dependências extras, compatível com GitHub Pages |
| Backend/DB | Supabase (JS Client via CDN) | Captura de leads, RLS nativo, sem servidor próprio |
| Deploy | GitHub Pages (branch `main`) | Já configurado no repositório |

**Arquivo de saída:** `landing.html` na raiz do projeto

---

## 7. FORA DO ESCOPO

- Autenticação de usuários (login/senha)
- Painel administrativo para visualizar leads
- Integração com ferramentas de e-mail marketing (Mailchimp, Brevo etc.)
- Analytics (Google Analytics, Plausible etc.)
- CMS ou sistema de edição de conteúdo
- Backend próprio (Node, Python etc.)
- Testes automatizados
- Internacionalização (i18n)
- Página de confirmação pós-cadastro (rota separada)

---

## DEPENDÊNCIAS

- [ ] Projeto Supabase criado com tabela `leads` e RLS configurado
- [ ] Variáveis `SUPABASE_URL` e `SUPABASE_ANON_KEY` disponíveis
- [ ] Copy aprovada em `docs/copy/fabrica-sociologica-landing.md` ✓

---

*PRD gerado pelo AIOX v2.0 — Fábrica de Conhecimento Sociológico*
*Desenvolvimento autorizado após aprovação deste documento.*
