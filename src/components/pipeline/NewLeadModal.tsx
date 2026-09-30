import React, { useState } from 'react'
import type { LeadSegment } from '@/types/leads'
import { LEAD_SEGMENTS } from '@/types/leads'
import { formatBRPhone, isValidBRPhone, isValidEmail } from '@/lib/formatters'
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'

interface NewLeadModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: {
    name: string
    email: string
    phone: string
    segment: LeadSegment
    notes?: string
  }) => Promise<void>
}

export default function NewLeadModal({ isOpen, onClose, onSubmit }: NewLeadModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [segment, setSegment] = useState<LeadSegment | ''>('')
  const [notes, setNotes] = useState('')

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    segment: false,
  })

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const nameError =
    touched.name && name.trim().length < 3 ? 'Nome obrigatório (mín. 3 caracteres)' : ''
  const emailError = touched.email && !isValidEmail(email) ? 'E-mail corporativo inválido' : ''
  const phoneError =
    touched.phone && !isValidBRPhone(phone) ? 'Telefone/WhatsApp incompleto (com DDD)' : ''
  const segmentError = touched.segment && !segment ? 'Selecione o segmento' : ''

  const isFormValid =
    name.trim().length >= 3 && isValidEmail(email) && isValidBRPhone(phone) && !!segment

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatBRPhone(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, segment: true })

    if (!isFormValid || !segment) return

    try {
      setSubmitting(true)
      setError(null)
      await onSubmit({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        segment: segment as LeadSegment,
        notes: notes.trim(),
      })
      onClose()
      setName('')
      setEmail('')
      setPhone('')
      setSegment('')
      setNotes('')
      setTouched({ name: false, email: false, phone: false, segment: false })
    } catch (err: unknown) {
      console.error('Erro ao criar lead:', err)
      setError('Falha ao registrar novo lead. Verifique os campos e tente novamente.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl border border-[#E4E9F0] shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        {/* Cabeçalho do Modal */}
        <div className="px-6 py-5 border-b border-[#E4E9F0] flex items-center justify-between bg-[#F5F7FA]">
          <div>
            <h3 className="text-lg font-bold text-[#0F2A43]">+ Adicionar Novo Lead</h3>
            <p className="text-xs text-[#5B6B7C]">
              Cadastre um lead manualmente para ingressar no status "Novo".
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#0F2A43] hover:bg-[#E4E9F0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Nome */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
              Nome Completo <span className="text-[#EF4444]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, name: true }))}
                placeholder="Ex: Carlos Eduardo Mendes"
                className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all ${
                  nameError ? 'border-red-400' : 'border-[#E4E9F0]'
                }`}
              />
              {touched.name && !nameError && name.length >= 3 && (
                <CheckCircle2 className="w-4 h-4 text-[#00A86B] absolute right-3 top-3" />
              )}
            </div>
            {nameError && <p className="text-xs text-[#EF4444]">{nameError}</p>}
          </div>

          {/* E-mail */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
              E-mail Corporativo <span className="text-[#EF4444]">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                placeholder="carlos@empresa.com.br"
                className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all ${
                  emailError ? 'border-red-400' : 'border-[#E4E9F0]'
                }`}
              />
              {touched.email && !emailError && isValidEmail(email) && (
                <CheckCircle2 className="w-4 h-4 text-[#00A86B] absolute right-3 top-3" />
              )}
            </div>
            {emailError && <p className="text-xs text-[#EF4444]">{emailError}</p>}
          </div>

          {/* Telefone & Segmento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                Telefone/WhatsApp <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                placeholder="(11) 99999-9999"
                maxLength={15}
                className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all ${
                  phoneError ? 'border-red-400' : 'border-[#E4E9F0]'
                }`}
              />
              {phoneError && <p className="text-xs text-[#EF4444]">{phoneError}</p>}
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                Segmento <span className="text-[#EF4444]">*</span>
              </label>
              <select
                value={segment}
                onChange={(e) => setSegment(e.target.value as LeadSegment)}
                onBlur={() => setTouched((p) => ({ ...p, segment: true }))}
                className={`w-full px-3.5 py-2.5 rounded-lg text-sm border bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all ${
                  segmentError ? 'border-red-400' : 'border-[#E4E9F0]'
                }`}
              >
                <option value="" disabled>
                  Selecione...
                </option>
                {LEAD_SEGMENTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {segmentError && <p className="text-xs text-[#EF4444]">{segmentError}</p>}
            </div>
          </div>

          {/* Observações / Notas */}
          <div className="space-y-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
              Notas Internas (Opcional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Contexto da oportunidade, histórico inicial ou dores relatadas..."
              className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00B4D8] transition-all resize-none"
            />
          </div>

          <div className="pt-3 border-t border-[#E4E9F0] flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-[#5B6B7C] hover:bg-[#F5F7FA] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#00B4D8]" />
                  <span>Salvando...</span>
                </>
              ) : (
                <span>Cadastrar Lead</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
