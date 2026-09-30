import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Clock, ArrowUpRight } from 'lucide-react'
import BerraLogo from '@/components/BerraLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2B2B2B] text-white pt-16 pb-12 border-t border-neutral-700">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-700">
          {/* Coluna 1: Sobre a Berra */}
          <div className="space-y-4">
            <BerraLogo theme="dark" variant="full" />
            <p className="text-sm text-neutral-300 leading-relaxed pt-1">
              Processos claros, eficientes e prontos para o crescimento do seu negócio. Mais de 15
              anos unindo visão prática de operações e tecnologia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/giovaniberra/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-[#F58220] hover:text-white text-neutral-300 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn de Giovani Berra"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F58220]">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
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
                  Sobre a Berra
                </a>
              </li>
              <li>
                <a
                  href="/#servicos"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a
                  href="/#processo"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Método em 4 Etapas
                </a>
              </li>
              <li>
                <a
                  href="/#resultados"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a
                  href="/#contato"
                  className="text-[#F58220] hover:underline font-semibold flex items-center gap-1"
                >
                  Solicitar Diagnóstico
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades reais da Berra */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F58220]">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Consultoria de Processos
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Consultoria de Seleção de ERP
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Desenvolvimento de Soluções Web
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Automação Administrativa e Comercial
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Criação de Capacidade de Medição (Indicadores)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
                Procedimentos Operacionais e Treinamento
              </li>
            </ul>
          </div>

          {/* Coluna 4: Informações de Contato Oficiais Berra */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F58220]">
              Informações de Contato
            </h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F58220] shrink-0 mt-0.5" />
                <span>
                  Rua João Alcino Sturmer, 551, Colina Sorriso
                  <br />
                  Caxias do Sul/RS, CEP 95032-180
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F58220] shrink-0" />
                <span>Segunda a sexta, das 9h às 18h</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F58220] shrink-0" />
                <a
                  href="https://wa.me/5554991548401"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (54) 99154-8401
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F58220] shrink-0" />
                <a
                  href="mailto:contato@berra.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@berra.com.br
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/login"
                className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                Acesso Restrito ao Pipeline de Leads
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F58220]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Rodapé inferior / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {currentYear} Berra — Análise e Otimização de Processos de Negócio. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contato" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Caxias do Sul / RS • Atendimento Nacional</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
