import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Lock, Mail, ArrowRight, Loader2, AlertCircle, ShieldCheck } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Se veio de redirecionamento de rota protegida, volta pra lá depois
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/pipeline'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email.trim() || !password) {
      setError('Informe seu e-mail e sua senha de acesso.')
      return
    }

    try {
      setSubmitting(true)
      await login(email.trim(), password)
      navigate(from, { replace: true })
    } catch (err: unknown) {
      console.error('Erro no login:', err)
      setError('Credenciais inválidas. Verifique seu e-mail e senha.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F7FA] px-4 py-12">
      {/* Logotipo */}
      <Link to="/" className="flex items-center gap-3 mb-8 group">
        <div className="w-11 h-11 rounded-xl bg-[#0F2A43] flex items-center justify-center text-white font-bold text-2xl shadow-md group-hover:bg-[#0A1F33] transition-colors">
          <span className="text-[#00B4D8]">V</span>P
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight text-[#0F2A43] leading-none">
            Vértice <span className="text-[#00B4D8]">Processos</span>
          </span>
          <span className="text-[11px] font-medium text-[#5B6B7C] tracking-wider uppercase mt-0.5">
            Área de Gestão
          </span>
        </div>
      </Link>

      {/* Card de Login */}
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E4E9F0] shadow-xl p-8 sm:p-10">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-2xl font-extrabold text-[#0F2A43] tracking-tight">Acesso Restrito</h1>
          <p className="text-xs sm:text-sm text-[#5B6B7C]">
            Entre com suas credenciais para gerenciar o pipeline de leads.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="login-email"
              className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]"
            >
              E-mail
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#5B6B7C] absolute left-3.5 top-3.5" />
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@verticeprocessos.com.br"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]"
              >
                Senha
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-[#00B4D8] hover:underline font-semibold"
              >
                Esqueci minha senha
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#5B6B7C] absolute left-3.5 top-3.5" />
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#00B4D8]" />
                  <span>Validando...</span>
                </>
              ) : (
                <>
                  <span>Entrar no Pipeline</span>
                  <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-[#E4E9F0] text-center">
          <Link
            to="/"
            className="text-xs text-[#5B6B7C] hover:text-[#0F2A43] transition-colors inline-flex items-center gap-1 font-medium"
          >
            ← Voltar para a Página Inicial
          </Link>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-[#5B6B7C]">
        <ShieldCheck className="w-4 h-4 text-[#00A86B]" />
        <span>Ambiente seguro protegido por criptografia TLS</span>
      </div>
    </div>
  )
}
