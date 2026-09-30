import React, { useState, useEffect } from 'react'
import type { Lead, LeadStatus, LeadSegment } from '@/types/leads'
import { LEAD_STATUSES, LEAD_SEGMENTS, STATUS_COLORS } from '@/types/leads'
import { formatBRPhone, isValidBRPhone, isValidEmail } from '@/lib/formatters'
import {
  X,
  Calendar,
  Clock,
  Phone,
  Mail,
  Briefcase,
  FileText,
  Save,
  Trash2,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'

interface LeadDetailModalProps {
  lead: Lead | null
  isOpen: boolean
  onClose: () => void
  onUpdate: (id: string, updated: Partial<Lead>) => Promise<void>
  onDelete: (id: string) => Promise<void>
}

export default function LeadDetailModal({
  lead,
  isOpen,
  onClose,
  onUpdate,
  onDelete,
}: LeadDetailModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [segment, setSegment] = useState<LeadSegment>('Outro')
  const [status, setStatus] = useState<LeadStatus>('Novo')
  const [notes, setNotes] = useState('')

  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null,
  )

  useEffect(() => {
    if (lead) {
      setName(lead.name || '')
      setEmail(lead.email || '')
      setPhone(lead.phone || '')
      setSegment(lead.segment || 'Outro')
      setStatus(lead.status || 'Novo')
      // Se notas vier em HTML, extrai ou deixa texto puro
      const cleanNotes = lead.notes ? lead.notes.replace(/<\/?[^>]+(>|$)/g, '') : ''
      setNotes(cleanNotes)
      setConfirmDelete(false)
      setFeedback(null)
    }
  }, [lead])

  if (!isOpen || !lead) return null

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatBRPhone(e.target.value))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !isValidEmail(email) || !isValidBRPhone(phone)) {
      setFeedback({ type: 'error', message: 'Preencha todos os campos obrigatórios corretamente.' })
      return
    }

    try {
      setSaving(true)
      setFeedback(null)
      await onUpdate(lead.id, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        segment,
        status,
        notes: notes.trim(),
      })
      setFeedback({ type: 'success', message: 'Lead atualizado com sucesso!' })
      setTimeout(() => {
        onClose()
      }, 1000)
    } catch (err: unknown) {
      console.error('Erro ao atualizar lead:', err)
      setFeedback({ type: 'error', message: 'Erro ao salvar alterações no lead.' })
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    try {
      setDeleting(true)
      await onDelete(lead.id)
      onClose()
    } catch (err: unknown) {
      console.error('Erro ao excluir lead:', err)
      setFeedback({ type: 'error', message: 'Não foi possível excluir o lead.' })
      setDeleting(false)
    }
  }

  const formattedCreated = new Date(lead.created).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between border-l border-[#E4E9F0] overflow-hidden">
        {/* Header do Drawer */}
        <div className="px-6 py-5 border-b border-[#E4E9F0] flex items-center justify-between bg-[#F5F7FA]">
          <div className="flex items-center gap-3">
            <div
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: STATUS_COLORS[status]?.border || '#00B4D8' }}
            />
            <div>
              <h2 className="text-lg font-bold text-[#0F2A43] leading-none">Detalhes do Lead</h2>
              <span className="text-xs text-[#5B6B7C]">ID: {lead.id}</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-[#0F2A43] hover:bg-[#E4E9F0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo / Formulário de Edição */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          {feedback && (
            <div
              className={`p-3 rounded-lg flex items-center gap-2 text-xs font-medium ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {feedback.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}

          {/* Histórico e Metadados */}
          <div className="p-4 rounded-xl bg-[#F5F7FA] border border-[#E4E9F0] grid grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#5B6B7C]">
              <Calendar className="w-4 h-4 text-[#00B4D8]" />
              <span>
                Criado em: <strong>{formattedCreated}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#5B6B7C]">
              <Clock className="w-4 h-4 text-[#00B4D8]" />
              <span>
                Etapa Atual: <strong>{status}</strong>
              </span>
            </div>
          </div>

          <form id="lead-edit-form" onSubmit={handleSave} className="space-y-4 text-left">
            {/* Status (Seletor Principal) */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                Estágio no Pipeline
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as LeadStatus)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm font-semibold border border-[#E4E9F0] bg-white text-[#1A2B3C] focus:ring-2 focus:ring-[#00B4D8] outline-none"
              >
                {LEAD_STATUSES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Nome Completo */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C]">
                Nome do Lead
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:ring-2 focus:ring-[#00B4D8] outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00B4D8]" /> E-mail Corporativo
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:ring-2 focus:ring-[#00B4D8] outline-none"
                required
              />
            </div>

            {/* Telefone e Segmento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#00B4D8]" /> WhatsApp / Telefone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={15}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:ring-2 focus:ring-[#00B4D8] outline-none"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C] flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#00B4D8]" /> Segmento
                </label>
                <select
                  value={segment}
                  onChange={(e) => setSegment(e.target.value as LeadSegment)}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:ring-2 focus:ring-[#00B4D8] outline-none"
                >
                  {LEAD_SEGMENTS.map((seg) => (
                    <option key={seg} value={seg}>
                      {seg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notas / Histórico Interno */}
            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2B3C] flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#00B4D8]" />
                Notas Internas e Histórico de Reuniões
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={5}
                placeholder="Adicione observações da proposta, ata da reunião ou próximos passos com este cliente..."
                className="w-full px-3.5 py-2.5 rounded-lg text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] focus:bg-white focus:ring-2 focus:ring-[#00B4D8] outline-none resize-none"
              />
            </div>
          </form>
        </div>

        {/* Rodapé de Ações */}
        <div className="p-6 border-t border-[#E4E9F0] bg-[#F5F7FA] flex items-center justify-between">
          {confirmDelete ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="px-3 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                {deleting ? 'Excluindo...' : 'Confirmar Exclusão'}
              </button>
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-[#5B6B7C] hover:bg-[#E4E9F0]"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4" /> Excluir Lead
            </button>
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#5B6B7C] hover:bg-[#E4E9F0] transition-colors"
            >
              Fechar
            </button>
            <button
              type="submit"
              form="lead-edit-form"
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all shadow-sm disabled:opacity-60"
            >
              {saving ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#00B4D8]" />
                  <span>Salvando...</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5 text-[#00B4D8]" />
                  <span>Salvar Alterações</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
