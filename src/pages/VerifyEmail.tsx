import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react'

export default function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') || ''

  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { confirmVerification } = useAuth()

  useEffect(() => {
    if (!token) {
      setLoading(false)
      setError('Token de verificação não informado na URL.')
      return
    }

    const verify = async () => {
      try {
        setLoading(true)
        await confirmVerification(token)
        setSuccess(true)
      } catch (err: unknown) {
        console.error('Erro na verificação de e-mail:', err)
        setError('Não foi possível verificar seu e-mail. O link pode ter expirado ou é inválido.')
      } finally {
        setLoading(false)
      }
    }

    verify()
  }, [token, confirmVerification])

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
            Verificação de Conta
          </span>
        </div>
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl border border-[#E4E9F0] shadow-xl p-8 sm:p-10 text-center">
        {loading && (
          <div className="py-8 space-y-4">
            <Loader2 className="w-10 h-10 animate-spin text-[#00B4D8] mx-auto" />
            <h2 className="text-lg font-bold text-[#0F2A43]">Confirmando sua conta...</h2>
            <p className="text-xs text-[#5B6B7C]">
              Aguarde enquanto validamos seu token de verificação de e-mail.
            </p>
          </div>
        )}

        {!loading && success && (
          <div className="space-y-4 py-2 animate-fade-in">
            <div className="w-14 h-14 bg-[#ECFDF5] border-2 border-[#00A86B] rounded-full flex items-center justify-center mx-auto text-[#00A86B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F2A43]">E-mail Verificado com Sucesso!</h2>
            <p className="text-xs sm:text-sm text-[#5B6B7C]">
              Sua conta foi ativada com sucesso. Agora você pode fazer login e acessar todos os
              recursos do pipeline.
            </p>
            <div className="pt-4">
              <Link
                to="/login"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all"
              >
                Acessar Minha Conta
                <ArrowRight className="w-4 h-4 text-[#00B4D8]" />
              </Link>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="space-y-4 py-2 animate-fade-in">
            <div className="w-14 h-14 bg-red-50 border-2 border-red-500 rounded-full flex items-center justify-center mx-auto text-red-500">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F2A43]">Falha na Verificação</h2>
            <p className="text-xs sm:text-sm text-[#5B6B7C]">{error}</p>
            <div className="pt-4">
              <Link
                to="/login"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#0F2A43] bg-[#F5F7FA] border border-[#E4E9F0] hover:bg-[#E4E9F0] transition-all"
              >
                Ir para o Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
