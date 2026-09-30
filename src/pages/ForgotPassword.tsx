import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { isValidEmail } from '@/lib/formatters'
import { Mail, ArrowLeft, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { requestPasswordReset } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!isValidEmail(email)) {
      setError('Por favor, informe um endereço de e-mail válido.')
      return
    }

    try {
      setLoading(true)
      await requestPasswordReset(email)
      setSubmitted(true)
    } catch (err: unknown) {
      console.error('Erro na recuperação:', err)
      // Mensagem genérica por segurança
      setSubmitted(true)
    } finally {
      setLoading(false)
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
            Recuperação de Acesso
          </span>
        </div>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E4E9F0] shadow-xl p-8 sm:p-10">
        {submitted ? (
          <div className="text-center space-y-4 py-2 animate-fade-in">
            <div className="w-14 h-14 bg-[#ECFDF5] border-2 border-[#00A86B] rounded-full flex items-center justify-center mx-auto text-[#00A86B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F2A43]">Verifique sua Caixa de Entrada</h2>
            <p className="text-xs sm:text-sm text-[#5B6B7C] leading-relaxed">
              Se houver uma conta associada a <strong>{email}</strong>, enviamos um link com
              instruções para redefinição da sua senha.
            </p>
            <div className="pt-4">
              <Link
                to="/login"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para o Login
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-2 text-center mb-6">
              <h1 className="text-2xl font-extrabold text-[#0F2A43] tracking-tight">
                Esqueceu sua senha?
              </h1>
              <p className="text-xs sm:text-sm text-[#5B6B7C]">
                Informe o seu e-mail cadastrado e enviaremos um link para criar uma nova senha.
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
                  htmlFor="forgot-email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]"
                >
                  Seu E-mail Cadastrado
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#5B6B7C] absolute left-3.5 top-3.5" />
                  <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemplo@verticeprocessos.com.br"
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all shadow-md disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#00B4D8]" />
                    <span>Enviando link...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Link de Recuperação</span>
                    <Send className="w-4 h-4 text-[#00B4D8]" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#E4E9F0] text-center">
              <Link
                to="/login"
                className="text-xs text-[#5B6B7C] hover:text-[#0F2A43] transition-colors inline-flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Voltar para o Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
