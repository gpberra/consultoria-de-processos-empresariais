import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Lock, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'

export default function ConfirmEmailChange() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''

  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { confirmEmailChange } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!token) {
      setError('Token de alteração ausente na URL.')
      return
    }

    if (!password) {
      setError('Informe sua senha atual para confirmar a troca de e-mail.')
      return
    }

    try {
      setLoading(true)
      await confirmEmailChange(token, password)
      setSuccess(true)
      setTimeout(() => {
        navigate('/login', { replace: true })
      }, 3500)
    } catch (err: unknown) {
      console.error('Erro ao confirmar alteração de e-mail:', err)
      setError('Não foi possível confirmar a alteração. Senha incorreta ou link expirado.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F7FA] px-4 py-12">
      <Link to="/" className="flex items-center gap-3 mb-8 group">
        <div className="w-11 h-11 rounded-xl bg-[#0F2A43] flex items-center justify-center text-white font-bold text-2xl shadow-md group-hover:bg-[#0A1F33] transition-colors">
          <span className="text-[#00B4D8]">V</span>P
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight text-[#0F2A43] leading-none">
            Vértice <span className="text-[#00B4D8]">Processos</span>
          </span>
          <span className="text-[11px] font-medium text-[#5B6B7C] tracking-wider uppercase mt-0.5">
            Alteração de E-mail
          </span>
        </div>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E4E9F0] shadow-xl p-8 sm:p-10">
        {success ? (
          <div className="text-center space-y-4 py-2 animate-fade-in">
            <div className="w-14 h-14 bg-[#ECFDF5] border-2 border-[#00A86B] rounded-full flex items-center justify-center mx-auto text-[#00A86B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F2A43]">E-mail Alterado com Sucesso!</h2>
            <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
              Sua sessão anterior foi encerrada por motivos de segurança. Faça login novamente
              usando seu novo endereço de e-mail corporativo.
            </p>
            <div className="pt-4">
              <Link
                to="/login"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all"
              >
                Ir para o Login
                <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-2 text-center mb-6">
              <h1 className="text-2xl font-extrabold text-[#0F2A43] tracking-tight">
                Confirmar Novo E-mail
              </h1>
              <p className="text-xs sm:text-sm text-[#5B6B7C]">
                Para segurança da sua conta, digite sua senha atual para autorizar a alteração
                definitiva.
              </p>
            </div>

            {!token && (
              <div className="mb-6 p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
                Aviso: Nenhum token de confirmação foi encontrado na URL. Use o link recebido no
                e-mail novo.
              </div>
            )}

            {error && (
              <div className="mb-6 p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="confirm-password"
                  className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]"
                >
                  Sua Senha Atual
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#5B6B7C] absolute left-3.5 top-3.5" />
                  <input
                    id="confirm-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !token}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all shadow-md disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#00B4D8]" />
                    <span>Confirmando alteração...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmar Novo E-mail</span>
                    <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#E4E9F0] text-center">
              <Link
                to="/pipeline"
                className="text-xs text-[#5B6B7C] hover:text-[#0F2A43] transition-colors font-medium"
              >
                ← Cancelar e Voltar ao Pipeline
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
