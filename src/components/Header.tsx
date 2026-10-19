import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import BerraLogo from '@/components/BerraLogo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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

          <a
            href="https://wa.me/5554991548401"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
          >
            {/* Ícone de WhatsApp */}
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.236-.245-.588-.493-.508-.678-.518-.176-.009-.376-.01-.577-.01s-.527.075-.803.376c-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.151.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9.12.58-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.662 1.446 5.175L2 22l4.981-1.408A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.15 8.15 0 0 1-4.16-1.134l-.298-.177-2.96.837.842-2.885-.195-.31A8.167 8.167 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
            </svg>
            <span>Fale Conosco</span>
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
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E5E7EB]">
              <a
                href="https://wa.me/5554991548401"
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#F58220] hover:bg-[#E06F12] shadow-md transition-all"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.236-.245-.588-.493-.508-.678-.518-.176-.009-.376-.01-.577-.01s-.527.075-.803.376c-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.151.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.9.12.58-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.351z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.662 1.446 5.175L2 22l4.981-1.408A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.15 8.15 0 0 1-4.16-1.134l-.298-.177-2.96.837.842-2.885-.195-.31A8.167 8.167 0 0 1 3.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
                </svg>
                <span>Fale Conosco</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
