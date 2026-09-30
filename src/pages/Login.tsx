import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Lock, Mail, ArrowRight, Loader2, AlertCircle, ShieldCheck } from 'lucide-react'
import BerraLogo from '@/components/BerraLogo'

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F8F9FA] px-4 py-12">
      {/* Logotipo Berra */}
      <Link to="/" className="flex items-center gap-3 mb-8 group">
        <BerraLogo theme="light" variant="full" />
      </Link>

      {/* Card de Login */}
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E5E7EB] shadow-xl p-8 sm:p-10">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-2xl font-extrabold text-[#2B2B2B] tracking-tight">
            Área do Consultor
          </h1>
          <p className="text-xs sm:text-sm text-[#52525B]">
            Entre com suas credenciais para gerenciar o pipeline de leads da Berra.
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
              className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B]"
            >
              E-mail
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#52525B] absolute left-3.5 top-3.5" />
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contato@berra.com.br"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-[#E5E7EB] bg-[#F8F9FA] text-[#2B2B2B] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F58220] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B]"
              >
                Senha
              </label>
              <Link
                to="/forgot-password"
                className="text-xs text-[#F58220] hover:underline font-semibold"
              >
                Esqueci minha senha
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#52525B] absolute left-3.5 top-3.5" />
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-[#E5E7EB] bg-[#F8F9FA] text-[#2B2B2B] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F58220] transition-all"
                required
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md shadow-[#F58220]/20 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Validando...</span>
                </>
              ) : (
                <>
                  <span>Entrar no Pipeline</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center">
          <Link
            to="/"
            className="text-xs text-[#52525B] hover:text-[#2B2B2B] transition-colors inline-flex items-center gap-1 font-medium"
          >
            ← Voltar para a Página Inicial
          </Link>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-xs text-[#52525B]">
        <ShieldCheck className="w-4 h-4 text-[#10B981]" />
        <span>Ambiente seguro protegido por criptografia TLS</span>
      </div>
    </div>
  )
}
