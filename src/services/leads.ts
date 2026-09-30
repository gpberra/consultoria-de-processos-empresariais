import pb from '@/lib/pocketbase/client'
import type { Lead, CreateLeadInput, UpdateLeadInput, LeadStatus } from '@/types/leads'

export const leadsService = {
  /**
   * Lista todos os leads cadastrados (apenas autenticados).
   */
  async listAll(): Promise<Lead[]> {
    const records = await pb.collection('leads').getFullList({
      sort: '-created',
    })
    return records as unknown as Lead[]
  },

  /**
   * Busca um lead pelo id.
   */
  async getById(id: string): Promise<Lead> {
    const record = await pb.collection('leads').getOne(id)
    return record as unknown as Lead
  },

  /**
   * Cria um novo lead. Aberto ao público via createRule: ""
   */
  async create(input: CreateLeadInput): Promise<Lead> {
    const payload = {
      ...input,
      status: input.status || 'Novo',
      notes: input.notes || '',
    }
    const record = await pb.collection('leads').create(payload)
    return record as unknown as Lead
  },

  /**
   * Atualiza dados de um lead (autenticado).
   */
  async update(id: string, input: UpdateLeadInput): Promise<Lead> {
    const record = await pb.collection('leads').update(id, input)
    return record as unknown as Lead
  },

  /**
   * Atualiza apenas o status de um lead (usado no drag and drop ou menu rápido).
   */
  async updateStatus(id: string, status: LeadStatus): Promise<Lead> {
    const record = await pb.collection('leads').update(id, { status })
    return record as unknown as Lead
  },

  /**
   * Exclui um lead permanentemente (autenticado).
   */
  async delete(id: string): Promise<boolean> {
    return await pb.collection('leads').delete(id)
  },

  /**
   * Inscreve para atualizações em tempo real da coleção `leads`.
   */
  subscribe(callback: (action: string, record: Lead) => void) {
    pb.collection('leads').subscribe('*', (e) => {
      callback(e.action, e.record as unknown as Lead)
    })
    return () => {
      pb.collection('leads').unsubscribe('*')
    }
  },
}
