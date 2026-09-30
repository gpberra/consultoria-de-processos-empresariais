migrate(
  (app) => {
    const collection = new Collection({
      name: 'leads',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: '', // Permite criação pública pelo formulário da landing page sem login
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text', required: true },
        {
          name: 'segment',
          type: 'select',
          required: true,
          values: ['Indústria', 'Varejo', 'Serviços', 'Tecnologia', 'Saúde', 'Outro'],
          maxSelect: 1,
        },
        {
          name: 'status',
          type: 'select',
          required: true,
          values: [
            'Novo',
            'Contato Realizado',
            'Proposta Enviada',
            'Negociação',
            'Fechado',
            'Perdido',
          ],
          maxSelect: 1,
        },
        { name: 'notes', type: 'editor', required: false },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_leads_status ON leads (status)'],
    })

    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('leads')
    app.delete(collection)
  },
)
