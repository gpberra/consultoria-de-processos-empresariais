import React from 'react'
import {
  GitFork,
  Zap,
  BarChart3,
  Bot,
  Kanban,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  Target,
  FileCheck,
  TrendingUp,
  Award,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedCounter from '@/components/AnimatedCounter'
import ProcessFlowIllustration from '@/components/ProcessFlowIllustration'
import LeadCaptureForm from '@/components/LeadCaptureForm'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA]">
      <Header />

      <main className="flex-1">
        {/* =========================================================
            SEÇÃO 1: HERO
        ========================================================= */}
        <section
          id="inicio"
          className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F2A43] via-[#123657] to-[#0A1F33] text-white py-16 lg:py-0"
        >
          {/* Grade de fundo tecnológica em baixa opacidade */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#00B4D8 1px, transparent 1px), linear-gradient(90deg, #00B4D8 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Gradiente animado suave de iluminação */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00B4D8]/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0F2A43]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna de Texto (Hero) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00B4D8]/30 text-xs font-semibold text-[#00B4D8] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-ping" />
                Excelência Operacional & BPMN
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Consultoria em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-[#00B4D8]">
                  Processos Empresariais
                </span>{' '}
                que Impulsiona Resultados.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Estruture, otimize e transforme a gestão da sua empresa com metodologias
                comprovadas. Eliminamos gargalos, automatizamos fluxos e construímos indicadores
                para decisões precisas.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#00B4D8] hover:bg-[#0096B4] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#00B4D8]/20"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  Conhecer Nossos Serviços
                </a>
              </div>

              {/* Destaques rápidos no rodapé do hero */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <span>Diagnóstico sem custo</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <span>Método Lean Six Sigma</span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <span>Suporte contínuo</span>
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
        <section className="bg-white border-y border-[#E4E9F0] py-12 relative z-10 shadow-sm">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E4E9F0]">
              {/* Indicador 1 */}
              <div className="text-center pt-4 lg:pt-0">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2A43]">
                  <AnimatedCounter end={120} suffix="+" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#5B6B7C]">
                  Projetos Entregues
                </p>
                <span className="text-[11px] text-slate-400">
                  Em empresas de médio e grande porte
                </span>
              </div>

              {/* Indicador 2 */}
              <div className="text-center pt-4 lg:pt-0 lg:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00B4D8]">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#5B6B7C]">
                  Clientes Satisfeitos
                </p>
                <span className="text-[11px] text-slate-400">Aprovação comprovada por NPS</span>
              </div>

              {/* Indicador 3 */}
              <div className="text-center pt-4 lg:pt-0 lg:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2A43]">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#5B6B7C]">
                  Anos de Experiência
                </p>
                <span className="text-[11px] text-slate-400">Atuação consolidada no mercado</span>
              </div>

              {/* Indicador 4 */}
              <div className="text-center pt-4 lg:pt-0 lg:pl-8">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00A86B]">
                  <AnimatedCounter end={3} prefix="" suffix="x" />
                </div>
                <p className="mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#5B6B7C]">
                  Retorno Médio (ROI)
                </p>
                <span className="text-[11px] text-slate-400">Economia e ganhos operacionais</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 3: SOBRE (id="sobre")
        ========================================================= */}
        <section id="sobre" className="py-20 lg:py-28 bg-[#F5F7FA]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Coluna Texto */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#00B4D8] border border-blue-100">
                  Quem Somos
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43] leading-tight">
                  Estratégia e Execução para a Excelência Operacional
                </h2>
                <p className="text-base text-[#5B6B7C] leading-relaxed">
                  Na <strong>Vértice Processos</strong>, acreditamos que empresas de alto
                  crescimento não podem depender de processos manuais, silos de comunicação ou
                  decisões baseadas em intuição.
                </p>
                <p className="text-base text-[#5B6B7C] leading-relaxed">
                  Nossa missão é diagnosticar as ineficiências ocultas da sua cadeia de valor,
                  redesenhar fluxos críticos segundo padrões mundiais (BPMN e Lean) e implementar
                  tecnologias que aumentam a produtividade da sua equipe enquanto reduzem custos
                  operacionais.
                </p>

                {/* 3 pilares da abordagem */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-white border border-[#E4E9F0] shadow-sm">
                    <Target className="w-6 h-6 text-[#00B4D8] mb-2" />
                    <h4 className="text-sm font-bold text-[#0F2A43]">Foco em Resultado</h4>
                    <p className="text-xs text-[#5B6B7C] mt-1">
                      Metas claras de redução de tempo e despesas.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E4E9F0] shadow-sm">
                    <FileCheck className="w-6 h-6 text-[#00B4D8] mb-2" />
                    <h4 className="text-sm font-bold text-[#0F2A43]">Padronização Ágil</h4>
                    <p className="text-xs text-[#5B6B7C] mt-1">
                      Processos claros e auditáveis para todos.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E4E9F0] shadow-sm">
                    <TrendingUp className="w-6 h-6 text-[#00B4D8] mb-2" />
                    <h4 className="text-sm font-bold text-[#0F2A43]">Escala Sustentável</h4>
                    <p className="text-xs text-[#5B6B7C] mt-1">
                      A sua empresa cresce sem multiplicar o caos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coluna Card do Consultor Principal */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl border border-[#E4E9F0] p-6 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00B4D8]/10 rounded-bl-full pointer-events-none" />

                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <img
                      src="https://img.usecurling.com/ppl/medium?gender=male&seed=42"
                      alt="Dr. Roberto Guimarães - Consultor Principal"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-white ring-2 ring-[#00B4D8]/20 shrink-0"
                    />
                    <div className="text-center sm:text-left">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
                        Liderança Técnica
                      </span>
                      <h3 className="text-xl font-bold text-[#0F2A43] mt-0.5">Roberto Guimarães</h3>
                      <p className="text-xs text-[#5B6B7C]">
                        Sócio-fundador & Master Black Belt Six Sigma
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-1 mt-2 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#E4E9F0] space-y-3">
                    <p className="text-xs text-[#5B6B7C] leading-relaxed italic">
                      “Processos eficientes não engessam sua empresa; pelo contrário, criam a
                      previsibilidade necessária para que sua equipe inove com rapidez e segurança.”
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-medium text-[#0F2A43]">
                      <span className="px-2.5 py-1 rounded bg-[#F5F7FA] border border-[#E4E9F0]">
                        BPMN 2.0 Certified
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#F5F7FA] border border-[#E4E9F0]">
                        Lean Six Sigma MBB
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#F5F7FA] border border-[#E4E9F0]">
                        Ex-Diretor Operações
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 4: SERVIÇOS (id="servicos")
        ========================================================= */}
        <section id="servicos" className="py-20 lg:py-28 bg-white border-y border-[#E4E9F0]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#00B4D8] border border-blue-100">
                Soluções Especializadas
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
                Serviços de Consultoria para cada Fase da sua Operação
              </h2>
              <p className="text-base text-[#5B6B7C]">
                Da identificação dos gargalos à automação com inteligência analítica, oferecemos
                soluções completas para impulsionar a maturidade da sua gestão.
              </p>
            </div>

            {/* Grid de 6 cards com elevação e hover */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-[#E4E9F0] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00B4D8] group-hover:bg-[#0F2A43] group-hover:text-white flex items-center justify-center transition-colors">
                    <GitFork className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A43] group-hover:text-[#00B4D8] transition-colors">
                    Mapeamento de Processos
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Documentação completa no formato AS-IS com modelagem BPMN rigorosa,
                    identificando responsabilidades, pontos cegos e desperdícios operacionais.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F5F7FA] text-xs font-semibold text-[#00B4D8] flex items-center gap-1 group-hover:underline">
                  Ver detalhes do escopo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-[#E4E9F0] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#00B4D8] group-hover:bg-[#0F2A43] group-hover:text-white flex items-center justify-center transition-colors">
                    <Zap className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A43] group-hover:text-[#00B4D8] transition-colors">
                    Otimização e Redesenho
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Construção do modelo TO-BE com eliminação de redundâncias, redução drástica de
                    Lead Time e simplificação de etapas manuais que travam as entregas.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F5F7FA] text-xs font-semibold text-[#00B4D8] flex items-center gap-1 group-hover:underline">
                  Ver detalhes do escopo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-[#E4E9F0] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00A86B] group-hover:bg-[#0F2A43] group-hover:text-white flex items-center justify-center transition-colors">
                    <BarChart3 className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A43] group-hover:text-[#00B4D8] transition-colors">
                    Gestão de Indicadores (KPIs)
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Desenvolvimento de painéis executivos, definição de acordos de nível de serviço
                    (SLA) e metodologia OKR para monitorar o ritmo real do negócio.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F5F7FA] text-xs font-semibold text-[#00B4D8] flex items-center gap-1 group-hover:underline">
                  Ver detalhes do escopo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl border border-[#E4E9F0] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-[#0F2A43] group-hover:text-white flex items-center justify-center transition-colors">
                    <Bot className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A43] group-hover:text-[#00B4D8] transition-colors">
                    Automação & Transformação Digital
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Integração de ferramentas no-code, RPA e softwares legados para automatizar
                    tarefas repetitivas e garantir a fluidez dos dados entre departamentos.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F5F7FA] text-xs font-semibold text-[#00B4D8] flex items-center gap-1 group-hover:underline">
                  Ver detalhes do escopo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl border border-[#E4E9F0] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-[#0F2A43] group-hover:text-white flex items-center justify-center transition-colors">
                    <Kanban className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A43] group-hover:text-[#00B4D8] transition-colors">
                    Gestão de Projetos
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Governança PMO e implantação de pipelines ágeis (Scrum/Kanban) para garantir que
                    iniciativas estratégicas sejam entregues no prazo e no orçamento.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F5F7FA] text-xs font-semibold text-[#00B4D8] flex items-center gap-1 group-hover:underline">
                  Ver detalhes do escopo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-xl border border-[#E4E9F0] p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-[#0F2A43] group-hover:text-white flex items-center justify-center transition-colors">
                    <GraduationCap className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F2A43] group-hover:text-[#00B4D8] transition-colors">
                    Treinamento e Capacitação
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Workshops práticos para lideranças e equipes operacionais, desenvolvendo uma
                    cultura interna sólida de melhoria contínua e foco no cliente.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#F5F7FA] text-xs font-semibold text-[#00B4D8] flex items-center gap-1 group-hover:underline">
                  Ver detalhes do escopo <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 5: PROCESSO (4 ETAPAS NUMERADAS)
        ========================================================= */}
        <section id="processo" className="py-20 lg:py-28 bg-[#F5F7FA]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#00B4D8] border border-blue-100">
                Nossa Metodologia
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
                Jornada Estruturada em 4 Etapas
              </h2>
              <p className="text-base text-[#5B6B7C]">
                Um passo a passo validado em mais de 120 empresas para garantir previsibilidade,
                engajamento e retorno mensurável.
              </p>
            </div>

            {/* Linha do tempo de etapas (desktop alternado, mobile vertical) */}
            <div className="space-y-8 relative">
              {/* Linha vertical central decorativa (desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-[#E4E9F0] -translate-x-1/2" />

              {/* Etapa 01 */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right space-y-2 lg:pr-12">
                  <span className="text-sm font-extrabold text-[#00B4D8] tracking-widest uppercase">
                    Etapa 01
                  </span>
                  <h3 className="text-xl font-bold text-[#0F2A43]">01. Diagnóstico</h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Imersão profunda na rotina da empresa, entrevistas com operadores e líderes,
                    levantamento de dados históricos e identificação precisa dos gargalos
                    operacionais e desperdícios financeiros.
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0F2A43] text-[#00B4D8] font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 -ml-[50%]">
                    01
                  </div>
                </div>
              </div>

              {/* Etapa 02 */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0F2A43] text-[#00B4D8] font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 ml-[50%]">
                    02
                  </div>
                </div>
                <div className="space-y-2 lg:pl-12">
                  <span className="text-sm font-extrabold text-[#00B4D8] tracking-widest uppercase">
                    Etapa 02
                  </span>
                  <h3 className="text-xl font-bold text-[#0F2A43]">02. Análise e Plano de Ação</h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Modelagem dos fluxos futuros (TO-BE), definição de prioridades através de matriz
                    de impacto versus esforço e elaboração do cronograma detalhado de execução com
                    metas mensuráveis.
                  </p>
                </div>
              </div>

              {/* Etapa 03 */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:text-right space-y-2 lg:pr-12">
                  <span className="text-sm font-extrabold text-[#00B4D8] tracking-widest uppercase">
                    Etapa 03
                  </span>
                  <h3 className="text-xl font-bold text-[#0F2A43]">03. Implementação</h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Execução lado a lado com os times: implantação dos novos procedimentos
                    operacionais padrão (POPs), parametrização de ferramentas de automação e
                    treinamento prático dos colaboradores.
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0F2A43] text-[#00B4D8] font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 -ml-[50%]">
                    03
                  </div>
                </div>
              </div>

              {/* Etapa 04 */}
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#00A86B] text-white font-black text-base flex items-center justify-center border-4 border-white shadow-md z-10 ml-[50%]">
                    04
                  </div>
                </div>
                <div className="space-y-2 lg:pl-12">
                  <span className="text-sm font-extrabold text-[#00A86B] tracking-widest uppercase">
                    Etapa 04
                  </span>
                  <h3 className="text-xl font-bold text-[#0F2A43]">
                    04. Monitoramento e Melhoria Contínua
                  </h3>
                  <p className="text-sm text-[#5B6B7C] leading-relaxed">
                    Acompanhamento sistemático dos KPIs em tempo real, auditorias periódicas de
                    conformidade e ajustes finos para garantir a perpetuação dos resultados e o
                    ciclo Kaizen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 6: RESULTADOS (DEPOIMENTOS)
        ========================================================= */}
        <section id="resultados" className="py-20 lg:py-28 bg-white border-y border-[#E4E9F0]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#00B4D8] border border-blue-100">
                Histórias de Sucesso
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
                O que Nossos Clientes Dizem Sobre Nós
              </h2>
              <p className="text-base text-[#5B6B7C]">
                Empresas que transformaram suas operações e escalaram seus negócios com a
                metodologia da Vértice.
              </p>
            </div>

            {/* 3 cards de depoimentos realistas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Depoimento 1 */}
              <div className="bg-[#F5F7FA] rounded-2xl p-7 border border-[#E4E9F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#00B4D8]/30" />
                  </div>
                  <p className="text-sm text-[#1A2B3C] italic leading-relaxed">
                    “O redesenho dos fluxos logísticos reduziu nosso tempo de expedição em 43% já no
                    terceiro mês. A equipe da Vértice tem uma capacidade rara de traduzir
                    complexidade em rotinas simples.”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4E9F0] flex items-center gap-3">
                  <img
                    src="https://img.usecurling.com/ppl/medium?gender=male&seed=15"
                    alt="Marcelo Albuquerque"
                    className="w-12 h-12 rounded-full object-cover border border-[#E4E9F0]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2A43]">Marcelo Albuquerque</h4>
                    <p className="text-xs text-[#5B6B7C]">Diretor de Operações — LogMax S.A.</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="bg-[#F5F7FA] rounded-2xl p-7 border border-[#E4E9F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#00B4D8]/30" />
                  </div>
                  <p className="text-sm text-[#1A2B3C] italic leading-relaxed">
                    “Antes da consultoria, nosso processo de compras e faturamento era um campo
                    minado de retrabalho. A padronização e automação trouxeram clareza e
                    economizaram centenas de horas operacionais.”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4E9F0] flex items-center gap-3">
                  <img
                    src="https://img.usecurling.com/ppl/medium?gender=female&seed=28"
                    alt="Fernanda Castilho"
                    className="w-12 h-12 rounded-full object-cover border border-[#E4E9F0]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2A43]">Fernanda Castilho</h4>
                    <p className="text-xs text-[#5B6B7C]">CFO — Rede Farmavida</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="bg-[#F5F7FA] rounded-2xl p-7 border border-[#E4E9F0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#00B4D8]/30" />
                  </div>
                  <p className="text-sm text-[#1A2B3C] italic leading-relaxed">
                    “A gestão por indicadores implementada nos deu previsibilidade pela primeira vez
                    na história da empresa. Hoje tomamos decisões estratégicas baseadas em dados em
                    tempo real, sem achismos.”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E4E9F0] flex items-center gap-3">
                  <img
                    src="https://img.usecurling.com/ppl/medium?gender=male&seed=39"
                    alt="Eduardo Prado"
                    className="w-12 h-12 rounded-full object-cover border border-[#E4E9F0]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2A43]">Eduardo Prado</h4>
                    <p className="text-xs text-[#5B6B7C]">CEO — Nexus Cloud Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SEÇÃO 7: CAPTURA DE LEADS (id="contato")
        ========================================================= */}
        <section id="contato" className="py-20 lg:py-28 bg-[#F5F7FA] relative">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-xs font-bold uppercase tracking-wider text-[#00B4D8] border border-blue-100">
                Comece Agora
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
                Dê o Primeiro Passo Rumo à Alta Performance
              </h2>
              <p className="text-base text-[#5B6B7C]">
                Agende uma conversa preliminar com nosso consultor sênior. Avaliaremos o cenário
                atual dos seus processos e apresentaremos oportunidades concretas de otimização.
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
