import React from 'react'
import type { Lead, LeadStatus } from '@/types/leads'
import { STATUS_COLORS, LEAD_STATUSES } from '@/types/leads'
import {
  MoreVertical,
  Phone,
  Mail,
  Briefcase,
  ChevronRight,
  Trash2,
  Edit,
  ArrowRightCircle,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface LeadCardProps {
  lead: Lead
  onSelect: (lead: Lead) => void
  onMoveToNext: (id: string, current: LeadStatus) => void
  onMoveToStatus: (id: string, newStatus: LeadStatus) => void
  onDelete: (id: string) => void
  onDragStart: (e: React.DragEvent, leadId: string) => void
}

export default function LeadCard({
  lead,
  onSelect,
  onMoveToNext,
  onMoveToStatus,
  onDelete,
  onDragStart,
}: LeadCardProps) {
  const statusColor = STATUS_COLORS[lead.status]?.border || '#F58220'
  const formattedDate = new Date(lead.created).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  })

  // Descobrir próximo status
  const currentIndex = LEAD_STATUSES.indexOf(lead.status)
  const nextStatus =
    currentIndex >= 0 && currentIndex < LEAD_STATUSES.length - 1
      ? LEAD_STATUSES[currentIndex + 1]
      : null

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, lead.id)}
      onClick={() => onSelect(lead)}
      className="group relative bg-white rounded-xl border border-[#E4E9F0] p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-grab active:cursor-grabbing text-left select-none"
      style={{
        borderLeftWidth: '4px',
        borderLeftColor: statusColor,
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h4 className="text-sm font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors leading-snug">
            {lead.name}
          </h4>
          <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#52525B]">
            <Briefcase className="w-3 h-3 text-[#F58220] shrink-0" />
            <span className="font-medium truncate max-w-[150px]">{lead.segment}</span>
          </div>
        </div>

        {/* Menu de ações (três pontos) */}
        <div onClick={(e) => e.stopPropagation()} className="shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-1 rounded-md text-slate-400 hover:text-[#0F2A43] hover:bg-[#F5F7FA] transition-colors outline-none">
              <MoreVertical className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white border border-[#E4E9F0] shadow-lg rounded-lg"
            >
              {nextStatus && (
                <DropdownMenuItem
                  onClick={() => onMoveToNext(lead.id, lead.status)}
                  className="text-xs font-medium text-[#0F2A43] flex items-center gap-2 cursor-pointer hover:bg-[#F5F7FA]"
                >
                  <ArrowRightCircle className="w-3.5 h-3.5 text-[#F58220]" />
                  <span>Avançar para: {nextStatus}</span>
                </DropdownMenuItem>
              )}

              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="text-xs font-medium text-[#0F2A43] flex items-center gap-2 cursor-pointer hover:bg-[#F5F7FA]">
                  <ChevronRight className="w-3.5 h-3.5 text-[#5B6B7C]" />
                  <span>Mover para estágio...</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="w-44 bg-white border border-[#E4E9F0] shadow-md rounded-lg">
                  {LEAD_STATUSES.map((st) => (
                    <DropdownMenuItem
                      key={st}
                      disabled={st === lead.status}
                      onClick={() => onMoveToStatus(lead.id, st)}
                      className="text-xs flex items-center gap-2 cursor-pointer hover:bg-[#F5F7FA] disabled:opacity-40"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: STATUS_COLORS[st]?.border || '#5B6B7C' }}
                      />
                      {st}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSeparator className="bg-[#E4E9F0]" />

              <DropdownMenuItem
                onClick={() => onSelect(lead)}
                className="text-xs font-medium text-[#0F2A43] flex items-center gap-2 cursor-pointer hover:bg-[#F5F7FA]"
              >
                <Edit className="w-3.5 h-3.5 text-[#F58220]" />
                <span>Editar Detalhes</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => onDelete(lead.id)}
                className="text-xs font-medium text-red-600 flex items-center gap-2 cursor-pointer hover:bg-red-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Excluir Lead</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Contatos Rápidos */}
      <div className="space-y-1 my-3 text-xs text-[#5B6B7C]">
        <div className="flex items-center gap-2 truncate">
          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate">{lead.email}</span>
        </div>
        <div className="flex items-center gap-2 truncate">
          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{lead.phone}</span>
        </div>
      </div>

      {/* Rodapé do Card */}
      <div className="pt-2.5 border-t border-[#F5F7FA] flex items-center justify-between text-[11px] text-slate-400">
        <span>Criado em {formattedDate}</span>
        <span
          className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide"
          style={{
            backgroundColor: STATUS_COLORS[lead.status]?.bg || '#F5F7FA',
            color: STATUS_COLORS[lead.status]?.text || '#1A2B3C',
          }}
        >
          {lead.status}
        </span>
      </div>
    </div>
  )
}
