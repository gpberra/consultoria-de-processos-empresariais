migrate(
  (app) => {
    // 1. Seed admin user
    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'gpberra@hotmail.com')
    } catch (_) {
      const admin = new Record(users)
      admin.setEmail('gpberra@hotmail.com')
      admin.setPassword('Skip@Pass')
      admin.setVerified(true)
      admin.set('name', 'Consultor Executivo')
      app.save(admin)
    }

    // 2. Seed initial leads in different stages
    const leads = app.findCollectionByNameOrId('leads')
    const sampleLeads = [
      {
        name: 'Carlos Mendes',
        email: 'carlos.mendes@mendesmetal.com.br',
        phone: '(11) 98765-4321',
        segment: 'Indústria',
        status: 'Novo',
        notes:
          '<p>Interessado em mapeamento e otimização da linha de montagem e redução de gargalos operacionais.</p>',
      },
      {
        name: 'Ana Paula Souza',
        email: 'ana.souza@lojassofia.com.br',
        phone: '(21) 99123-4567',
        segment: 'Varejo',
        status: 'Contato Realizado',
        notes:
          '<p>Primeira reunião realizada com diretor comercial. Foco em gestão de estoque multicanal e integração de KPIs.</p>',
      },
      {
        name: 'Ricardo Fonseca',
        email: 'ricardo@techprime.io',
        phone: '(31) 98877-6655',
        segment: 'Tecnologia',
        status: 'Proposta Enviada',
        notes:
          '<p>Proposta comercial enviada para automatização de processos internos e documentação de squads ágeis.</p>',
      },
      {
        name: 'Mariana Alencar',
        email: 'mariana.alencar@clinicaalencar.med.br',
        phone: '(41) 99654-3210',
        segment: 'Saúde',
        status: 'Negociação',
        notes:
          '<p>Revisando escopo final para certificação de processos e fluxo de atendimento aos pacientes.</p>',
      },
      {
        name: 'Fernando Dias',
        email: 'fernando@logsulconsulting.com.br',
        phone: '(19) 97123-8899',
        segment: 'Serviços',
        status: 'Fechado',
        notes:
          '<p>Contrato assinado! Projeto de reengenharia de processos logísticos com kick-off agendado.</p>',
      },
      {
        name: 'Juliana Peixoto',
        email: 'juliana@grupoinnove.com.br',
        phone: '(51) 98456-1122',
        segment: 'Outro',
        status: 'Perdido',
        notes:
          '<p>Orçamento postergado para o próximo ano fiscal por contingenciamento da holding.</p>',
      },
    ]

    for (const item of sampleLeads) {
      try {
        app.findFirstRecordByData('leads', 'email', item.email)
      } catch (_) {
        const record = new Record(leads)
        record.set('name', item.name)
        record.set('email', item.email)
        record.set('phone', item.phone)
        record.set('segment', item.segment)
        record.set('status', item.status)
        record.set('notes', item.notes)
        app.save(record)
      }
    }
  },
  (app) => {
    // Down migration
    try {
      const user = app.findAuthRecordByEmail('_pb_users_auth_', 'gpberra@hotmail.com')
      app.delete(user)
    } catch (_) {}

    const leadsCol = app.findCollectionByNameOrId('leads')
    const emails = [
      'carlos.mendes@mendesmetal.com.br',
      'ana.souza@lojassofia.com.br',
      'ricardo@techprime.io',
      'mariana.alencar@clinicaalencar.med.br',
      'fernando@logsulconsulting.com.br',
      'juliana@grupoinnove.com.br',
    ]

    for (const email of emails) {
      try {
        const rec = app.findFirstRecordByData('leads', 'email', email)
        app.delete(rec)
      } catch (_) {}
    }
  },
)
