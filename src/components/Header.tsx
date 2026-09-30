import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { label: 'Início', href: isHomePage ? '#inicio' : '/#inicio' },
    { label: 'Sobre', href: isHomePage ? '#sobre' : '/#sobre' },
    { label: 'Serviços', href: isHomePage ? '#servicos' : '/#servicos' },
    { label: 'Resultados', href: isHomePage ? '#resultados' : '/#resultados' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#E4E9F0] shadow-sm transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logotipo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#0F2A43] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-[#0A1F33] transition-colors">
            <span className="text-[#00B4D8]">V</span>P
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-[#0F2A43] leading-none">
              Vértice <span className="text-[#00B4D8]">Processos</span>
            </span>
            <span className="text-[11px] font-medium text-[#5B6B7C] tracking-wider uppercase mt-0.5">
              Consultoria Empresarial
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#1A2B3C] hover:text-[#00B4D8] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {isAuthenticated ? (
            <Link
              to="/pipeline"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-50 text-xs font-semibold text-[#0F2A43] border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
              Área Restrita (Pipeline)
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-xs font-semibold text-[#5B6B7C] hover:text-[#0F2A43] transition-colors"
            >
              Acesso Consultor
            </Link>
          )}

          <a
            href={isHomePage ? '#contato' : '/#contato'}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4 ml-1.5 text-[#00B4D8]" />
          </a>
        </nav>

        {/* Botão Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1A2B3C] hover:bg-[#F5F7FA] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Painel Lateral Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="bg-white w-4/5 max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between border-r border-[#E4E9F0]">
            <div className="space-y-6">
              <div className="text-xs font-semibold tracking-wider text-[#5B6B7C] uppercase">
                Menu de Navegação
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between text-base font-semibold text-[#1A2B3C] hover:text-[#00B4D8] py-1 border-b border-[#F5F7FA]"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#5B6B7C]" />
                  </a>
                ))}

                {isAuthenticated ? (
                  <Link
                    to="/pipeline"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-sm font-semibold text-[#0F2A43] bg-blue-50 p-3 rounded-lg border border-blue-200"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                    Ir para o Pipeline
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="text-sm font-semibold text-[#5B6B7C] hover:text-[#0F2A43] py-2"
                  >
                    Acesso Consultor (Login)
                  </Link>
                )}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E4E9F0]">
              <a
                href={isHomePage ? '#contato' : '/#contato'}
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] shadow-md transition-all"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-4 h-4 ml-2 text-[#00B4D8]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
