import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { leadsService } from '@/services/leads'
import type { Lead, LeadStatus, LeadSegment } from '@/types/leads'
import { LEAD_STATUSES, STATUS_COLORS } from '@/types/leads'
import LeadCard from '@/components/pipeline/LeadCard'
import LeadDetailModal from '@/components/pipeline/LeadDetailModal'
import NewLeadModal from '@/components/pipeline/NewLeadModal'
import {
  Plus,
  LogOut,
  Filter,
  RefreshCw,
  Search,
  Kanban as KanbanIcon,
  Layers,
  ChevronDown,
  ChevronUp,
  User as UserIcon,
} from 'lucide-react'

export default function Pipeline() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [filterSegment, setFilterSegment] = useState<string>('all')
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Modais
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isNewLeadOpen, setIsNewLeadOpen] = useState(false)

  // Mobile: estados dos acordeões por status
  const [mobileOpenStatuses, setMobileOpenStatuses] = useState<Record<string, boolean>>({
    Novo: true,
    'Contato Realizado': true,
    'Proposta Enviada': true,
    Negociação: true,
    Fechado: false,
    Perdido: false,
  })

  // Drag-and-drop state
  const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null)
  const [dragOverColumn, setDragOverColumn] = useState<LeadStatus | null>(null)

  // Carrega leads
  const fetchLeads = useCallback(async () => {
    try {
      setLoading(true)
      const data = await leadsService.listAll()
      setLeads(data)
    } catch (err: unknown) {
      console.error('Erro ao buscar leads:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLeads()

    // Subscrição em Tempo Real (PocketBase Realtime)
    const unsubscribe = leadsService.subscribe((action, record) => {
      setLeads((prev) => {
        if (action === 'create') {
          // Evita duplicata se já existir
          if (prev.some((l) => l.id === record.id)) return prev
          return [record, ...prev]
        }
        if (action === 'update') {
          return prev.map((l) => (l.id === record.id ? record : l))
        }
        if (action === 'delete') {
          return prev.filter((l) => l.id !== record.id)
        }
        return prev
      })

      // Se o modal de detalhes estiver aberto com esse lead, atualiza ele também
      setSelectedLead((current) => {
        if (current && current.id === record.id) {
          return action === 'delete' ? null : record
        }
        return current
      })
    })

    return () => {
      unsubscribe()
    }
  }, [fetchLeads])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // Filtragem dos leads
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      const matchSegment = filterSegment === 'all' || l.segment === filterSegment
      const matchStatus = filterStatus === 'all' || l.status === filterStatus
      const matchSearch =
        !searchQuery.trim() ||
        l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.phone.includes(searchQuery)

      return matchSegment && matchStatus && matchSearch
    })
  }, [leads, filterSegment, filterStatus, searchQuery])

  // Agrupamento por status
  const leadsByStatus = useMemo(() => {
    const grouped: Record<LeadStatus, Lead[]> = {
      Novo: [],
      'Contato Realizado': [],
      'Proposta Enviada': [],
      Negociação: [],
      Fechado: [],
      Perdido: [],
    }
    filteredLeads.forEach((l) => {
      if (grouped[l.status]) {
        grouped[l.status].push(l)
      } else {
        grouped['Novo'].push(l)
      }
    })
    return grouped
  }, [filteredLeads])

  // Ações no lead
  const handleOpenDetail = (lead: Lead) => {
    setSelectedLead(lead)
    setIsDetailOpen(true)
  }

  const handleUpdateLead = async (id: string, updated: Partial<Lead>) => {
    await leadsService.update(id, updated)
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, ...updated } : l)))
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead((prev) => (prev ? { ...prev, ...updated } : null))
    }
  }

  const handleDeleteLead = async (id: string) => {
    await leadsService.delete(id)
    setLeads((prev) => prev.filter((l) => l.id !== id))
    if (selectedLead?.id === id) {
      setIsDetailOpen(false)
      setSelectedLead(null)
    }
  }

  const handleMoveToNext = async (id: string, current: LeadStatus) => {
    const idx = LEAD_STATUSES.indexOf(current)
    if (idx >= 0 && idx < LEAD_STATUSES.length - 1) {
      const next = LEAD_STATUSES[idx + 1]
      await leadsService.updateStatus(id, next)
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: next } : l)))
    }
  }

  const handleMoveToStatus = async (id: string, newStatus: LeadStatus) => {
    await leadsService.updateStatus(id, newStatus)
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)))
  }

  const handleCreateLead = async (data: {
    name: string
    email: string
    phone: string
    segment: LeadSegment
    notes?: string
  }) => {
    const created = await leadsService.create({
      ...data,
      status: 'Novo',
    })
    setLeads((prev) => [created, ...prev])
  }

  // Drag and Drop Handlers
  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedLeadId(id)
    e.dataTransfer.setData('text/plain', id)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent, status: LeadStatus) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    if (dragOverColumn !== status) {
      setDragOverColumn(status)
    }
  }

  const handleDragLeave = () => {
    setDragOverColumn(null)
  }

  const handleDrop = async (e: React.DragEvent, newStatus: LeadStatus) => {
    e.preventDefault()
    setDragOverColumn(null)
    const id = e.dataTransfer.getData('text/plain') || draggedLeadId
    if (!id) return

    const targetLead = leads.find((l) => l.id === id)
    if (!targetLead || targetLead.status === newStatus) return

    // Atualização otimista
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)))

    try {
      await leadsService.updateStatus(id, newStatus)
    } catch (err) {
      console.error('Erro ao atualizar status via drag and drop:', err)
      // Reverte se der erro
      fetchLeads()
    } finally {
      setDraggedLeadId(null)
    }
  }

  const toggleMobileStatus = (st: string) => {
    setMobileOpenStatuses((prev) => ({ ...prev, [st]: !prev[st] }))
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col">
      {/* Barra de Navegação Superior da Área Restrita */}
      <header className="bg-white border-b border-[#E4E9F0] sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo e Título */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#0F2A43] flex items-center justify-center text-white font-bold text-sm shadow">
                <span className="text-[#00B4D8]">V</span>P
              </div>
              <span className="hidden sm:inline font-extrabold text-sm tracking-tight text-[#0F2A43]">
                Vértice <span className="text-[#00B4D8]">Processos</span>
              </span>
            </Link>

            <span className="h-5 w-px bg-[#E4E9F0]" />

            <div className="flex items-center gap-2">
              <KanbanIcon className="w-5 h-5 text-[#00B4D8]" />
              <h1 className="text-base sm:text-lg font-extrabold text-[#0F2A43] tracking-tight">
                Pipeline de Leads
              </h1>
            </div>
          </div>

          {/* Ações do Usuário e Logout */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsNewLeadOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all shadow-sm"
            >
              <Plus className="w-4 h-4 text-[#00B4D8]" />
              <span className="hidden sm:inline">Novo Lead</span>
              <span className="sm:hidden">Novo</span>
            </button>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F7FA] border border-[#E4E9F0] text-xs text-[#5B6B7C]">
              <UserIcon className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span className="font-medium truncate max-w-[140px]">
                {user?.name || user?.email || 'Consultor'}
              </span>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#5B6B7C] hover:text-[#EF4444] hover:bg-red-50 transition-colors"
              title="Encerrar sessão"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Barra de Filtros e Busca */}
      <section className="bg-white border-b border-[#E4E9F0] py-3.5 px-4 sm:px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Busca por texto */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#5B6B7C] absolute left-3.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, e-mail ou WhatsApp..."
              className="w-full pl-9 pr-4 py-2 rounded-lg text-xs sm:text-sm border border-[#E4E9F0] bg-[#F5F7FA] text-[#1A2B3C] placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#00B4D8] outline-none"
            />
          </div>

          {/* Filtros Dropdown e Atualização */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {/* Filtro por Segmento */}
            <div className="flex items-center gap-1.5 bg-[#F5F7FA] border border-[#E4E9F0] px-2.5 py-1.5 rounded-lg text-xs shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#5B6B7C]" />
              <span className="text-[#5B6B7C]">Segmento:</span>
              <select
                value={filterSegment}
                onChange={(e) => setFilterSegment(e.target.value)}
                className="bg-transparent font-semibold text-[#0F2A43] outline-none cursor-pointer"
              >
                <option value="all">Todos</option>
                <option value="Indústria">Indústria</option>
                <option value="Varejo">Varejo</option>
                <option value="Serviços">Serviços</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Saúde">Saúde</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            {/* Filtro por Status */}
            <div className="flex items-center gap-1.5 bg-[#F5F7FA] border border-[#E4E9F0] px-2.5 py-1.5 rounded-lg text-xs shrink-0">
              <Layers className="w-3.5 h-3.5 text-[#5B6B7C]" />
              <span className="text-[#5B6B7C]">Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent font-semibold text-[#0F2A43] outline-none cursor-pointer"
              >
                <option value="all">Todos os Estágios</option>
                {LEAD_STATUSES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Botão de Atualizar */}
            <button
              type="button"
              onClick={fetchLeads}
              className="p-2 rounded-lg bg-[#F5F7FA] border border-[#E4E9F0] text-[#5B6B7C] hover:text-[#0F2A43] hover:bg-[#E4E9F0] transition-colors shrink-0"
              title="Atualizar dados"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal do Pipeline */}
      <main className="flex-1 p-4 sm:p-6 max-w-[1600px] w-full mx-auto overflow-hidden flex flex-col">
        {/* DESKTOP / TABLET: Visualização em Colunas Kanban (6 colunas ou scroll horizontal se telas menores) */}
        <div className="hidden md:flex gap-4 overflow-x-auto pb-4 flex-1 items-start min-h-[600px]">
          {LEAD_STATUSES.map((status) => {
            const statusLeads = leadsByStatus[status] || []
            const isColumnTarget = dragOverColumn === status

            return (
              <div
                key={status}
                onDragOver={(e) => handleDragOver(e, status)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, status)}
                className={`flex-1 min-w-[240px] max-w-[280px] bg-[#F0F3F7] rounded-xl border flex flex-col max-h-[calc(100vh-210px)] transition-colors duration-150 ${
                  isColumnTarget
                    ? 'border-[#00B4D8] bg-[#E1F3F8]/50 ring-2 ring-[#00B4D8]/30'
                    : 'border-[#E4E9F0]'
                }`}
              >
                {/* Cabeçalho da Coluna */}
                <div className="p-3 border-b border-[#E4E9F0] flex items-center justify-between bg-white/70 rounded-t-xl">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: STATUS_COLORS[status]?.border || '#00B4D8' }}
                    />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F2A43]">
                      {status}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-extrabold bg-[#E4E9F0] text-[#1A2B3C]">
                    {statusLeads.length}
                  </span>
                </div>

                {/* Lista de Cards da Coluna */}
                <div className="flex-1 p-2.5 space-y-2.5 overflow-y-auto">
                  {statusLeads.length === 0 ? (
                    <div className="h-32 border-2 border-dashed border-[#CBD5E1] rounded-lg flex items-center justify-center text-xs text-slate-400 text-center p-3">
                      Arraste um lead para este estágio
                    </div>
                  ) : (
                    statusLeads.map((lead) => (
                      <LeadCard
                        key={lead.id}
                        lead={lead}
                        onSelect={handleOpenDetail}
                        onMoveToNext={handleMoveToNext}
                        onMoveToStatus={handleMoveToStatus}
                        onDelete={handleDeleteLead}
                        onDragStart={handleDragStart}
                      />
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* MOBILE: Visualização em Acordeões Verticais agrupados por status */}
        <div className="md:hidden space-y-3">
          {LEAD_STATUSES.map((status) => {
            const statusLeads = leadsByStatus[status] || []
            const isOpen = !!mobileOpenStatuses[status]

            return (
              <div
                key={status}
                className="bg-white rounded-xl border border-[#E4E9F0] overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileStatus(status)}
                  className="w-full px-4 py-3 flex items-center justify-between bg-[#F5F7FA] hover:bg-[#E4E9F0]/60 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: STATUS_COLORS[status]?.border || '#00B4D8' }}
                    />
                    <span className="text-sm font-bold text-[#0F2A43]">{status}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#E4E9F0] text-[#1A2B3C]">
                      {statusLeads.length}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#5B6B7C]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#5B6B7C]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-3 space-y-3 border-t border-[#E4E9F0]">
                    {statusLeads.length === 0 ? (
                      <p className="text-xs text-[#5B6B7C] text-center py-4">
                        Nenhum lead neste estágio.
                      </p>
                    ) : (
                      statusLeads.map((lead) => (
                        <LeadCard
                          key={lead.id}
                          lead={lead}
                          onSelect={handleOpenDetail}
                          onMoveToNext={handleMoveToNext}
                          onMoveToStatus={handleMoveToStatus}
                          onDelete={handleDeleteLead}
                          onDragStart={handleDragStart}
                        />
                      ))
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>

      {/* Modal Lateral de Detalhes e Edição */}
      <LeadDetailModal
        lead={selectedLead}
        isOpen={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false)
          setSelectedLead(null)
        }}
        onUpdate={handleUpdateLead}
        onDelete={handleDeleteLead}
      />

      {/* Modal de Adicionar Novo Lead */}
      <NewLeadModal
        isOpen={isNewLeadOpen}
        onClose={() => setIsNewLeadOpen(false)}
        onSubmit={handleCreateLead}
      />
    </div>
  )
}
