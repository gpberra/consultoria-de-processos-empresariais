import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import BerraLogo from '@/components/BerraLogo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navLinks = [
    { label: 'Início', href: isHomePage ? '#inicio' : '/#inicio' },
    { label: 'Sobre', href: isHomePage ? '#sobre' : '/#sobre' },
    { label: 'Áreas de Atuação', href: isHomePage ? '#servicos' : '/#servicos' },
    { label: 'Resultados', href: isHomePage ? '#resultados' : '/#resultados' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm transition-all duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logotipo Berra */}
        <Link to="/" className="flex items-center group">
          <BerraLogo
            theme="light"
            variant="full"
            imageClassName="h-11 sm:h-12 md:h-13 w-auto max-w-[280px] object-contain select-none transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-[#2B2B2B] hover:text-[#F58220] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {isAuthenticated ? (
            <Link
              to="/pipeline"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-orange-50 text-xs font-semibold text-[#2B2B2B] border border-orange-200 hover:bg-orange-100 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F58220]" />
              Área Restrita (Pipeline)
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-xs font-semibold text-[#52525B] hover:text-[#2B2B2B] transition-colors"
            >
              Acesso Consultor
            </Link>
          )}

          <a
            href={isHomePage ? '#contato' : '/#contato'}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4 ml-1.5 text-white" />
          </a>
        </nav>

        {/* Botão Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2B2B2B] hover:bg-[#F5F7FA] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Painel Lateral Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="bg-white w-4/5 max-w-sm h-full p-6 shadow-2xl flex flex-col justify-between border-r border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="text-xs font-semibold tracking-wider text-[#52525B] uppercase">
                Menu de Navegação
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between text-base font-semibold text-[#2B2B2B] hover:text-[#F58220] py-1 border-b border-[#F8F9FA]"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#52525B]" />
                  </a>
                ))}

                {isAuthenticated ? (
                  <Link
                    to="/pipeline"
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 text-sm font-semibold text-[#2B2B2B] bg-orange-50 p-3 rounded-lg border border-orange-200"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#F58220]" />
                    Ir para o Pipeline
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="text-sm font-semibold text-[#52525B] hover:text-[#2B2B2B] py-2"
                  >
                    Acesso Consultor (Login)
                  </Link>
                )}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB]">
              <a
                href={isHomePage ? '#contato' : '/#contato'}
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] shadow-md transition-all"
              >
                Fale Conosco
                <ArrowRight className="w-4 h-4 ml-2 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
