export type LeadStatus =
  | 'Novo'
  | 'Contato Realizado'
  | 'Proposta Enviada'
  | 'Negociação'
  | 'Fechado'
  | 'Perdido'

export type LeadSegment = 'Indústria' | 'Varejo' | 'Serviços' | 'Tecnologia' | 'Saúde' | 'Outro'

export interface Lead {
  id: string
  name: string
  email: string
  phone: string
  segment: LeadSegment
  status: LeadStatus
  notes?: string
  created: string
  updated: string
}

export interface CreateLeadInput {
  name: string
  email: string
  phone: string
  segment: LeadSegment
  status?: LeadStatus
  notes?: string
}

export interface UpdateLeadInput {
  name?: string
  email?: string
  phone?: string
  segment?: LeadSegment
  status?: LeadStatus
  notes?: string
}

export const LEAD_STATUSES: LeadStatus[] = [
  'Novo',
  'Contato Realizado',
  'Proposta Enviada',
  'Negociação',
  'Fechado',
  'Perdido',
]

export const LEAD_SEGMENTS: LeadSegment[] = [
  'Indústria',
  'Varejo',
  'Serviços',
  'Tecnologia',
  'Saúde',
  'Outro',
]

export const STATUS_COLORS: Record<
  LeadStatus,
  { badge: string; border: string; bg: string; text: string }
> = {
  Novo: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    border: '#00B4D8',
    bg: '#EBF8FA',
    text: '#007A94',
  },
  'Contato Realizado': {
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    border: '#6366F1',
    bg: '#EEF2FF',
    text: '#4F46E5',
  },
  'Proposta Enviada': {
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    border: '#8B5CF6',
    bg: '#F5F3FF',
    text: '#7C3AED',
  },
  Negociação: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    border: '#F59E0B',
    bg: '#FFFBEB',
    text: '#D97706',
  },
  Fechado: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    border: '#00A86B',
    bg: '#ECFDF5',
    text: '#00875A',
  },
  Perdido: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    border: '#EF4444',
    bg: '#FEF2F2',
    text: '#DC2626',
  },
}
