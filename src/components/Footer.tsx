import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Clock } from 'lucide-react'
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
                  href="https://wa.me/5554991548401"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#F58220] hover:underline font-semibold flex items-center gap-1"
                >
                  Fale Conosco (WhatsApp)
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
                Desenvolvimento de Apps Personalizados e Soluções Web
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
              <a
                href="https://wa.me/5554991548401"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-[#F58220] text-xs font-semibold text-white transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.236-.245-.588-.493-.508-.678-.518-.176-.009-.376-.01-.577-.01s-.527.075-.803.376c-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.151.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9.12.58-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.662 1.446 5.175L2 22l4.981-1.408A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.15 8.15 0 0 1-4.16-1.134l-.298-.177-2.96.837.842-2.885-.195-.31A8.167 8.167 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
                </svg>
                Atendimento via WhatsApp
              </a>
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
            <a
              href="https://wa.me/5554991548401"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Fale Conosco
            </a>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">Caxias do Sul / RS • Atendimento Nacional</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
