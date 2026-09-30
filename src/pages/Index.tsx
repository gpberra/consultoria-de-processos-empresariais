import React from 'react'
import {
  GitFork,
  Zap,
  BarChart3,
  Bot,
  Globe,
  Database,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  Compass,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedCounter from '@/components/AnimatedCounter'
import ProcessFlowIllustration from '@/components/ProcessFlowIllustration'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            SEÇÃO 1: HERO
        ========================================================= */}
        <section
          id="inicio"
          className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2B2B2B] via-[#242424] to-[#191919] text-white py-16 lg:py-0"
        >
          {/* Grade de fundo tecnológica sóbria */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#F58220 1px, transparent 1px), linear-gradient(90deg, #F58220 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Gradiente sutil de iluminação laranja */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F58220]/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F58220]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna de Texto (Hero) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F58220]/40 text-xs font-semibold text-orange-400 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#F58220] animate-ping" />
                Análise e Otimização de Processos de Negócio
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Processos claros, eficientes e prontos para o{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-[#F58220]">
                  crescimento do seu negócio.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Análise e otimização de processos de negócio com consultores, analistas e
                desenvolvedores que unem visão prática e tecnologia. Enxergamos como o trabalho
                funciona hoje, eliminamos perdas e tornamos sua operação ágil e escalável.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#F58220]/25"
                >
                  Agende uma Consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Conheça Nossas Áreas
                </a>
              </div>

              {/* Destaques rápidos no rodapé do hero */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Diagnóstico prático</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Sem jargões vazios</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Tecnologia sob medida</span>
                </div>
              </div>
            </div>

            {/* Coluna da Ilustração (Hero) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <ProcessFlowIllustration />
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 2: MÉTRICAS (INDICADORES ANIMADOS)
        ========================================================= */}
        <section className="bg-white border-y border-[#E5E7EB] py-12 relative z-10 shadow-sm">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
              {/* Indicador 1 */}
              <div className="text-center pt-4 lg:pt-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2B2B]">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#52525B]">
                  Anos de Experiência
                </p>
                <span className="text-[11px] text-neutral-500">
                  Prática real em operações e gestão
                </span>
              </div>

              {/* Indicador 2 */}
              <div className="text-center pt-4 lg:pt-0 lg:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F58220]">
                  <AnimatedCounter end={30} suffix="+" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#52525B]">
                  Grandes Projetos Concluídos
                </p>
                <span className="text-[11px] text-neutral-500">Transformação de ponta a ponta</span>
              </div>

              {/* Indicador 3 */}
              <div className="text-center pt-4 lg:pt-0 lg:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2B2B]">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#52525B]">
                  Foco em Resultado Real
                </p>
                <span className="text-[11px] text-neutral-500">Soluções aplicadas na rotina</span>
              </div>

              {/* Indicador 4 */}
              <div className="text-center pt-4 lg:pt-0 lg:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10B981]">
                  <AnimatedCounter end={3} prefix="" suffix="x" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#52525B]">
                  Ganho Operacional Típico
                </p>
                <span className="text-[11px] text-neutral-500">
                  Economia e consistência de time
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 3: SOBRE A BERRA (id="sobre")
        ========================================================= */}
        <section id="sobre" className="py-20 lg:py-28 bg-[#F8F9FA]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Coluna Texto: Essência da Berra */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-xs font-bold uppercase tracking-wider text-[#F58220] border border-orange-200">
                  Nossa Essência
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B2B2B] leading-tight">
                  Sobre a Berra
                </h2>
                <p className="text-base text-[#52525B] leading-relaxed">
                  A <strong>Berra</strong> nasce da experiência prática de mais de 15 anos em
                  operações e gestão. Somos uma equipe de consultores, analistas e desenvolvedores
                  que <strong>entende o negócio antes de propor tecnologia</strong>.
                </p>
                <p className="text-base text-[#52525B] leading-relaxed">
                  Nosso trabalho é enxergar como a empresa realmente funciona, identificar onde o
                  tempo e o dinheiro se perdem e transformar processos em algo claro, controlável e
                  automatizável. Acreditamos em soluções simples para problemas reais, com foco em
                  resultado que se sustenta no dia a dia.
                </p>

                {/* Princípios que guiam nossa atuação (conforme berra.com.br) */}
                <div className="pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2B2B2B] mb-3">
                    Princípios que guiam nossa atuação
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:border-[#F58220]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F58220] flex items-center justify-center mb-3">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#2B2B2B]">Clareza</h4>
                      <p className="text-xs text-[#52525B] mt-1.5 leading-relaxed">
                        Mapeamentos transparentes e linguagens diretas, para que toda a empresa
                        compreenda e execute sem ruídos.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:border-[#F58220]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F58220] flex items-center justify-center mb-3">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#2B2B2B]">Praticidade</h4>
                      <p className="text-xs text-[#52525B] mt-1.5 leading-relaxed">
                        Soluções funcionais desenhadas para a rotina do time, eliminando excessos
                        burocráticos e complexidade vazia.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:border-[#F58220]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F58220] flex items-center justify-center mb-3">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#2B2B2B]">Foco em Resultado</h4>
                      <p className="text-xs text-[#52525B] mt-1.5 leading-relaxed">
                        Cada redesenho e automação é orientado para ganho de produtividade, redução
                        de custos e consistência operacional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Card do Consultor Giovani Berra */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-[#E5E7EB] p-7 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F58220]/10 rounded-bl-full pointer-events-none" />

                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <img
                      src="https://img-c.udemycdn.com/user/200_H/297522989_7341.jpg"
                      alt="Giovani Pan Berra - Consultor de Processos e Tecnologia"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-white ring-2 ring-[#F58220]/30 shrink-0"
                    />
                    <div className="text-center sm:text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
                        Fundador & Consultor Especialista
                      </span>
                      <h3 className="text-xl font-bold text-[#2B2B2B] mt-0.5">Giovani Pan Berra</h3>
                      <p className="text-xs text-[#52525B] mt-0.5">
                        Consultor Empresarial de Processos & Administrador de Empresas
                      </p>
                      <a
                        href="https://www.linkedin.com/in/giovaniberra/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#F58220] hover:underline"
                      >
                        Perfil no LinkedIn <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#E5E7EB] space-y-3">
                    <p className="text-xs text-[#52525B] leading-relaxed">
                      Profissional certificado com mais de 15 anos de atuação prática em gestão e
                      operações. Atuou como delegado regional da associação internacional de
                      profissionais de processos e já liderou mais de 30 grandes projetos de
                      otimização de rotinas, integração de sistemas e tecnologia analítica.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-[#2B2B2B]">
                      <span className="px-2.5 py-1 rounded bg-[#F8F9FA] border border-[#E5E7EB]">
                        +15 Anos em Operações
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#F8F9FA] border border-[#E5E7EB]">
                        Especialista em ERPs
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#F8F9FA] border border-[#E5E7EB]">
                        Power BI & Automação
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#F8F9FA] border border-[#E5E7EB]">
                        Soluções Web
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 4: SERVIÇOS / ÁREAS DE ATUAÇÃO (id="servicos")
            Requisitos:
            - Remover Gestão de Projetos
            - Incluir Consultoria de Seleção de ERP em destaque entre os primeiros
            - Incluir Desenvolvimento de Soluções Web
            - Em Gestão de Indicadores incluir "criação de capacidade de medição"
            - Sem jargões de consultoria
        ========================================================= */}
        <section id="servicos" className="py-20 lg:py-28 bg-white border-y border-[#E5E7EB]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-xs font-bold uppercase tracking-wider text-[#F58220] border border-orange-200">
                Especialidades & Serviços
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B2B2B]">
                Áreas de Atuação
              </h2>
              <p className="text-base text-[#52525B]">
                Estruturamos métodos, ferramentas e capacitação sob medida para fortalecer os
                pilares operacionais da sua organização.
              </p>
            </div>

            {/* Grid de 6 cards de serviços alinhados com o site oficial da Berra */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Consultoria de Processos */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] group-hover:bg-[#2B2B2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <GitFork className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors">
                    Consultoria de Processos
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Mapeamento de como o trabalho funciona hoje, diagnóstico de gargalos e desenho
                    do processo ideal para eliminar retrabalho e desperdício. Do levantamento à
                    implantação prática, com acompanhamento de resultados.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F8F9FA] text-xs font-semibold text-[#F58220] flex items-center gap-1 group-hover:underline">
                  Conversar sobre processos <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 2: Consultoria de Seleção de ERP (Destaque Solicitado) */}
              <div className="bg-white rounded-xl border-2 border-[#F58220] p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#F58220] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                  Destaque
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F58220] group-hover:bg-[#2B2B2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <Database className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors">
                    Consultoria de Seleção de ERP
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Apoio técnico e imparcial na escolha do sistema de gestão ideal para sua
                    empresa. Levantamento criterioso de requisitos do negócio, comparação de
                    fornecedores de software e especificação de aderência para evitar investimentos
                    errados.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-orange-100 text-xs font-semibold text-[#F58220] flex items-center gap-1 group-hover:underline">
                  Avaliar seleção de sistema <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 3: Desenvolvimento de Soluções Web (Adicionado conforme pedido) */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] group-hover:bg-[#2B2B2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <Globe className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors">
                    Desenvolvimento de Soluções Web
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Sistemas e ferramentas sob medida que conectam o processo ao digital. Soluções
                    pensadas para a realidade da sua operação, sem complexidade desnecessária,
                    resolvendo lacunas entre sistemas existentes.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F8F9FA] text-xs font-semibold text-[#F58220] flex items-center gap-1 group-hover:underline">
                  Conhecer soluções digitais <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 4: Gestão de Indicadores e Dashboards (Com "criação de capacidade de medição") */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] group-hover:bg-[#2B2B2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <BarChart3 className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors">
                    Gestão de Indicadores e Dashboards
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Foco na <strong>criação de capacidade de medição</strong>: definição de
                    indicadores claros de desempenho, painéis visuais e monitoramento contínuo para
                    apoiar decisões estratégicas com base em dados confiáveis.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F8F9FA] text-xs font-semibold text-[#F58220] flex items-center gap-1 group-hover:underline">
                  Criar capacidade de medição <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 5: Automações Administrativas e Comerciais */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] group-hover:bg-[#2B2B2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <Bot className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors">
                    Automação de Processos
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Rotinas repetitivas executadas automaticamente, reduzindo erros manuais e
                    liberando o time para o que realmente importa. Automação inteligente aplicada
                    sobre processos previamente bem definidos.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F8F9FA] text-xs font-semibold text-[#F58220] flex items-center gap-1 group-hover:underline">
                  Ver automações possíveis <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 6: Treinamento e Procedimentos Operacionais */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] group-hover:bg-[#2B2B2B] group-hover:text-white flex items-center justify-center transition-colors">
                    <GraduationCap className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2B2B2B] group-hover:text-[#F58220] transition-colors">
                    Treinamento & Padronização
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Capacitação prática para que a equipe domine os novos métodos e rotinas. Criação
                    de procedimentos claros, com responsabilidades e regras definidas. Menos
                    dependência de memória e mais consistência na entrega.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F8F9FA] text-xs font-semibold text-[#F58220] flex items-center gap-1 group-hover:underline">
                  Capacitar equipe <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 5: COMO TRABALHAMOS (Jornada em 4 Etapas Sem Jargões)
        ========================================================= */}
        <section id="processo" className="py-20 lg:py-28 bg-[#F8F9FA]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-xs font-bold uppercase tracking-wider text-[#F58220] border border-orange-200">
                Nosso Método de Trabalho
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B2B2B]">
                Como Transformamos a Rotina da sua Empresa
              </h2>
              <p className="text-base text-[#52525B]">
                Um ciclo estruturado e prático para garantir clareza, adesão da equipe e resultados
                sustentáveis no dia a dia.
              </p>
            </div>

            {/* Linha do tempo de etapas (desktop alternado, mobile vertical) */}
            <div className="space-y-8 relative">
              {/* Linha vertical central decorativa (desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-[#E5E7EB] -translate-x-1/2" />

              {/* Etapa 01: Entendimento e Diagnóstico */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right space-y-2 lg:pr-12">
                  <span className="text-sm font-extrabold text-[#F58220] tracking-widest uppercase">
                    Etapa 01
                  </span>
                  <h3 className="text-xl font-bold text-[#2B2B2B]">
                    01. Entendimento da Rotina Atual
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Conversamos com quem executa o trabalho e com as lideranças para mapear como as
                    tarefas realmente acontecem na prática. Identificamos onde o tempo se perde, os
                    pontos de atrito e as dores mais urgentes.
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#2B2B2B] text-[#F58220] font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 -ml-[50%]">
                    01
                  </div>
                </div>
              </div>

              {/* Etapa 02: Desenho do Processo Ideal */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#2B2B2B] text-[#F58220] font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 ml-[50%]">
                    02
                  </div>
                </div>
                <div className="space-y-2 lg:pl-12">
                  <span className="text-sm font-extrabold text-[#F58220] tracking-widest uppercase">
                    Etapa 02
                  </span>
                  <h3 className="text-xl font-bold text-[#2B2B2B]">
                    02. Desenho do Processo Ideal
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Construímos uma rotina simplificada, sem passos inúteis e com papéis bem
                    definidos. Priorizamos ações de maior ganho imediato e desenhamos fluxos fáceis
                    de entender por qualquer colaborador.
                  </p>
                </div>
              </div>

              {/* Etapa 03: Implantação e Tecnologia */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right space-y-2 lg:pr-12">
                  <span className="text-sm font-extrabold text-[#F58220] tracking-widest uppercase">
                    Etapa 03
                  </span>
                  <h3 className="text-xl font-bold text-[#2B2B2B]">03. Implantação e Tecnologia</h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Colocamos a nova rotina para rodar junto com os times: parametrização de
                    sistemas, automações de rotinas repetitivas, desenvolvimento de ferramentas web
                    de apoio e treinamento prático da equipe.
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#2B2B2B] text-[#F58220] font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 -ml-[50%]">
                    03
                  </div>
                </div>
              </div>

              {/* Etapa 04: Capacidade de Medição e Sustentação */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#10B981] text-white font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 ml-[50%]">
                    04
                  </div>
                </div>
                <div className="space-y-2 lg:pl-12">
                  <span className="text-sm font-extrabold text-[#10B981] tracking-widest uppercase">
                    Etapa 04
                  </span>
                  <h3 className="text-xl font-bold text-[#2B2B2B]">
                    04. Criação de Capacidade de Medição
                  </h3>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    Estabelecemos indicadores confiáveis e painéis de acompanhamento visual. Com
                    números reais em mãos, a liderança toma decisões rápidas e a melhoria se torna
                    um hábito permanente da empresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 6: O QUE DIZEM NOSSOS CLIENTES (Depoimentos Reais do site da Berra)
        ========================================================= */}
        <section id="resultados" className="py-20 lg:py-28 bg-white border-y border-[#E5E7EB]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-xs font-bold uppercase tracking-wider text-[#F58220] border border-orange-200">
                Resultados Reais
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B2B2B]">
                O que dizem nossos clientes
              </h2>
              <p className="text-base text-[#52525B]">
                Empresas que conquistaram mais produtividade, governança e clareza na execução de
                suas equipes.
              </p>
            </div>

            {/* Cards com os depoimentos reais do site berra.com.br */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Depoimento 1 - Marcos T. */}
              <div className="bg-[#F8F9FA] rounded-2xl p-7 border border-[#E5E7EB] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="text-3xl font-serif text-[#F58220] leading-none">“</div>
                  <p className="text-sm text-[#2B2B2B] italic leading-relaxed">
                    “A Berra entendeu rapidamente nossa operação e organizou processos que dependiam
                    há anos de pessoas específicas. Hoje temos clareza de quem faz o quê.”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#2B2B2B] text-white font-bold flex items-center justify-center text-sm">
                    MT
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2B2B2B]">Marcos T.</h4>
                    <p className="text-xs text-[#52525B]">Diretor Industrial</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 - Renata S. */}
              <div className="bg-[#F8F9FA] rounded-2xl p-7 border border-[#E5E7EB] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="text-3xl font-serif text-[#F58220] leading-none">“</div>
                  <p className="text-sm text-[#2B2B2B] italic leading-relaxed">
                    “Com as automações, reduzimos o tempo gasto em tarefas administrativas e
                    ganhamos controle sobre o que antes vivia em planilhas soltas.”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#F58220] text-white font-bold flex items-center justify-center text-sm">
                    RS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2B2B2B]">Renata S.</h4>
                    <p className="text-xs text-[#52525B]">Gerente Comercial</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 3 - Paula M. */}
              <div className="bg-[#F8F9FA] rounded-2xl p-7 border border-[#E5E7EB] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="text-3xl font-serif text-[#F58220] leading-none">“</div>
                  <p className="text-sm text-[#2B2B2B] italic leading-relaxed">
                    “Treinamento objetivo e aplicável. A equipe saiu sabendo exatamente como
                    executar o novo procedimento, sem resistência.”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#2B2B2B] text-white font-bold flex items-center justify-center text-sm">
                    PM
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2B2B2B]">Paula M.</h4>
                    <p className="text-xs text-[#52525B]">Coordenadora de RH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 7: FALE CONOSCO / DIAGNÓSTICO (id="contato")
        ========================================================= */}
        <section id="contato" className="py-20 lg:py-28 bg-[#F8F9FA] relative">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-xs font-bold uppercase tracking-wider text-[#F58220] border border-orange-200">
                Primeiro Passo
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2B2B2B]">
                Fale Conosco
              </h2>
              <p className="text-base text-[#52525B]">
                Conte-nos sobre o momento da sua empresa. Vamos entender seus desafios e avaliar
                como podemos tornar seus processos mais eficientes.
              </p>
            </div>

            <LeadCaptureForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
