import React, { useState } from 'react'
import { leadsService } from '@/services/leads'
import type { LeadSegment } from '@/types/leads'
import { LEAD_SEGMENTS } from '@/types/leads'
import { formatBRPhone, isValidBRPhone, isValidEmail } from '@/lib/formatters'
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from 'lucide-react'

export default function LeadCaptureForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [segment, setSegment] = useState<LeadSegment | ''>('')

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    segment: false,
  })

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  // Validações
  const nameError = touched.name && name.trim().length < 3 ? 'Informe seu nome completo' : ''
  const emailError =
    touched.email && !isValidEmail(email) ? 'Informe um e-mail corporativo válido' : ''
  const phoneError =
    touched.phone && !isValidBRPhone(phone) ? 'Telefone/WhatsApp incompleto (com DDD)' : ''
  const segmentError = touched.segment && !segment ? 'Selecione o segmento da sua empresa' : ''

  const isFormValid =
    name.trim().length >= 3 && isValidEmail(email) && isValidBRPhone(phone) && !!segment

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatBRPhone(e.target.value)
    setPhone(formatted)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, segment: true })

    if (!isFormValid || !segment) {
      return
    }

    try {
      setSubmitting(true)
      setServerError(null)

      await leadsService.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        segment: segment as LeadSegment,
        status: 'Novo',
      })

      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setSegment('')
      setTouched({ name: false, email: false, phone: false, segment: false })
    } catch (err: unknown) {
      console.error('Erro ao enviar lead:', err)
      setServerError('Não foi possível registrar seu pedido. Verifique os dados e tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#E4E9F0] p-6 sm:p-10 max-w-2xl mx-auto">
      {success ? (
        <div className="text-center py-8 space-y-5 animate-fade-in">
          <div className="w-16 h-16 bg-[#ECFDF5] border-2 border-[#10B981] rounded-full flex items-center justify-center mx-auto text-[#10B981]">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-[#2B2B2B]">
              Solicitação Enviada com Sucesso!
            </h3>
            <p className="text-sm sm:text-base text-[#52525B] max-w-md mx-auto">
              Agradecemos seu contato. Nossa equipe entrará em contato em até{' '}
              <strong>1 dia útil</strong> pelo WhatsApp ou e-mail corporativo.
            </p>
          </div>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-[#2B2B2B] bg-[#F8F9FA] border border-[#E5E7EB] hover:bg-[#E5E7EB] transition-colors"
            >
              Enviar Outra Solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1 text-left">
            <h3 className="text-2xl font-extrabold text-[#2B2B2B] tracking-tight">
              Solicitar Diagnóstico
            </h3>
            <p className="text-sm text-[#52525B]">
              Preencha os dados abaixo para receber uma análise preliminar da maturidade dos
              processos da sua empresa.
            </p>
          </div>
          {serverError && (
            <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{serverError}</span>
            </div>
          )}
          {/* Campo Nome */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="lead-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B]"
            >
              Nome Completo <span className="text-[#EF4444]">*</span>
            </label>
            <div className="relative">
              <input
                id="lead-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                placeholder="Ex: Carlos Eduardo Mendes"
                className={`w-full px-4 py-3 rounded-lg text-sm border bg-[#F8F9FA] text-[#2B2B2B] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F58220] transition-all ${
                  nameError ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E5E7EB]'
                }`}
              />
              {touched.name && !nameError && name.length >= 3 && (
                <CheckCircle2 className="w-4 h-4 text-[#10B981] absolute right-3.5 top-3.5" />
              )}
            </div>
            {nameError && (
              <p className="text-xs text-[#EF4444] flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {nameError}
              </p>
            )}
          </div>
          {/* Campo E-mail Corporativo */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="lead-email"
              className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B]"
            >
              E-mail Corporativo <span className="text-[#EF4444]">*</span>
            </label>
            <div className="relative">
              <input
                id="lead-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                placeholder="carlos@suaempresa.com.br"
                className={`w-full px-4 py-3 rounded-lg text-sm border bg-[#F8F9FA] text-[#2B2B2B] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F58220] transition-all ${
                  emailError ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E5E7EB]'
                }`}
              />
              {touched.email && !emailError && isValidEmail(email) && (
                <CheckCircle2 className="w-4 h-4 text-[#10B981] absolute right-3.5 top-3.5" />
              )}
            </div>
            {emailError && (
              <p className="text-xs text-[#EF4444] flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {emailError}
              </p>
            )}
          </div>
          {/* Linha Dupla: Telefone e Segmento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {/* Campo Telefone */}
            <div className="space-y-1.5">
              <label
                htmlFor="lead-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B]"
              >
                Telefone / WhatsApp <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <input
                  id="lead-phone"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                  placeholder="(54) 99999-9999"
                  maxLength={15}
                  className={`w-full px-4 py-3 rounded-lg text-sm border bg-[#F8F9FA] text-[#2B2B2B] placeholder:text-neutral-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F58220] transition-all ${
                    phoneError ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E5E7EB]'
                  }`}
                />
                {touched.phone && !phoneError && isValidBRPhone(phone) && (
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] absolute right-3.5 top-3.5" />
                )}
              </div>
              {phoneError && (
                <p className="text-xs text-[#EF4444] flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {phoneError}
                </p>
              )}
            </div>

            {/* Campo Segmento */}
            <div className="space-y-1.5">
              <label
                htmlFor="lead-segment"
                className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B]"
              >
                Segmento da Empresa <span className="text-[#EF4444]">*</span>
              </label>
              <div className="relative">
                <select
                  id="lead-segment"
                  value={segment}
                  onChange={(e) => setSegment(e.target.value as LeadSegment)}
                  onBlur={() => setTouched((prev) => ({ ...prev, segment: true }))}
                  className={`w-full px-4 py-3 rounded-lg text-sm border bg-[#F8F9FA] text-[#2B2B2B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F58220] transition-all appearance-none cursor-pointer ${
                    segmentError ? 'border-red-400 ring-1 ring-red-400' : 'border-[#E5E7EB]'
                  }`}
                >
                  <option value="" disabled>
                    Selecione um setor...
                  </option>
                  {LEAD_SEGMENTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3.5 top-3.5 text-neutral-400 text-xs">
                  ▼
                </div>
              </div>
              {segmentError && (
                <p className="text-xs text-[#EF4444] flex items-center gap-1 mt-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {segmentError}
                </p>
              )}
            </div>
          </div>
          {/* Botão de Envio */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md shadow-[#F58220]/20 disabled:opacity-60 disabled:pointer-events-none"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                  <span>Enviando Informações...</span>
                </>
              ) : (
                <>
                  <span>Solicitar Diagnóstico Gratuito</span>
                  <Send className="w-4 h-4 text-white" />
                </>
              )}
            </button>
          </div>
          {/* Aviso de Privacidade */}
          <div className="flex items-center justify-center gap-1.5 pt-2 text-xs text-[#52525B]">
            <ShieldCheck className="w-4 h-4 text-[#F58220] shrink-0" />
            <span>
              Seus dados estão protegidos. Não enviamos spam. Leia nossa{' '}
              <a href="#contato" className="underline hover:text-[#2B2B2B]">
                Política de Privacidade
              </a>
              .
            </span>
          </div>{' '}
        </form>
      )}
    </div>
  )
}
