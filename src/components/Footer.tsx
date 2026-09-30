import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F2A43] text-white pt-16 pb-12 border-t border-[#1A3855]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1A3855]">
          {/* Coluna 1: Sobre a Consultoria */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0A1F33] border border-[#00B4D8]/30 flex items-center justify-center text-white font-bold text-xl shadow-inner">
                <span className="text-[#00B4D8]">V</span>P
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-white leading-none">
                  Vértice <span className="text-[#00B4D8]">Processos</span>
                </span>
                <span className="text-[11px] font-medium text-slate-300 tracking-wider uppercase mt-0.5">
                  Consultoria Empresarial
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Transformamos operações e estruturas corporativas através do redesenho estratégico de
              processos, automação inteligente e foco obsessivo em eficiência e rentabilidade.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0A1F33] hover:bg-[#00B4D8] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn da Vértice Processos"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0A1F33] hover:bg-[#00B4D8] hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200"
                aria-label="Instagram da Vértice Processos"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8]">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="/#inicio"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/#sobre"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Sobre a Consultoria
                </a>
              </li>
              <li>
                <a
                  href="/#servicos"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="/#processo"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Metodologia em 4 Etapas
                </a>
              </li>
              <li>
                <a
                  href="/#resultados"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Depoimentos de Sucesso
                </a>
              </li>
              <li>
                <a
                  href="/#contato"
                  className="text-[#00B4D8] hover:underline font-semibold flex items-center gap-1"
                >
                  Solicitar Diagnóstico Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8]">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                Mapeamento & Modelagem BPMN
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                Reengenharia e Eliminação de Gargalos
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                Gestão por Indicadores (KPIs & OKRs)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                RPA & Automação de Fluxos de Trabalho
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
                Capacitação de Lideranças e Equipes
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8]">
              Contato Corporativo
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                <span>Av. Brigadeiro Faria Lima, 3477 — Itaim Bibi, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00B4D8] shrink-0" />
                <span>+55 (11) 3280-9400</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00B4D8] shrink-0" />
                <span>contato@verticeprocessos.com.br</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/login"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
              >
                Acesso Restrito ao Pipeline de Gestão
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00B4D8]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} Vértice Processos Consultoria Empresarial Ltda. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contato" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">CNPJ: 42.180.952/0001-90</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
