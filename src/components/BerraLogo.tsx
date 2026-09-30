import React from 'react'
import logoFull from '@/assets/logo-berra-e2410.png'
import logoIcon from '@/assets/favicon-2079c.png'

interface BerraLogoProps {
  /**
   * 'dark' -> para fundos escuros (header escuro, hero escuro, footer escuro):
   * exibe wordmark branco com símbolo laranja
   * 'light' -> para fundos claros: exibe wordmark grafite #2B2B2B com símbolo laranja
   */
  theme?: 'light' | 'dark'
  /**
   * 'full' -> símbolo + wordmark + tagline
   * 'compact' -> símbolo + wordmark
   * 'icon-only' -> apenas símbolo
   */
  variant?: 'full' | 'compact' | 'icon-only'
  /** Altura da imagem do logotipo / ícone */
  className?: string
  /** Se deve usar o asset de imagem PNG original em vez do SVG vetorial */
  useImage?: boolean
}

/**
 * BerraLogo — Componente oficial da marca Berra.
 * Inclui os losangos laranja ascendentes (#F58220), wordmark "Berra" e tagline
 * "ANÁLISE E OTIMIZAÇÃO DE PROCESSOS DE NEGÓCIO."
 */
export default function BerraLogo({
  theme = 'light',
  variant = 'compact',
  className = '',
  useImage = false,
}: BerraLogoProps) {
  const isDark = theme === 'dark'

  // Se variant for apenas o ícone
  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img src={logoIcon} alt="Berra Ícone" className="w-9 h-9 object-contain" />
      </div>
    )
  }

  // Se for solicitado o uso direto da imagem oficial em fundo claro
  if (useImage && !isDark && variant === 'full') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src={logoFull}
          alt="Berra - Análise e Otimização de Processos de Negócio"
          className="h-10 w-auto object-contain"
        />
      </div>
    )
  }

  // Renderização vetorial SVG de alta definição, fiel à tipografia e símbolo geométrico
  // Símbolo: 4 losangos/quadrados inclinados laranja (#F58220) em disposição diagonal ascendente
  // Wordmark: "Berra"
  // Tagline: "ANÁLISE E OTIMIZAÇÃO DE PROCESSOS DE NEGÓCIO."
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      {/* Símbolo com os 4 tiles arredondados em diagonal ascendente */}
      <svg
        className="w-10 h-10 shrink-0 select-none"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Tile inferior esquerdo */}
        <polygon
          points="20,84 38,84 32,66 14,66"
          fill="#F58220"
          stroke="#F58220"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Tile inferior central / médio */}
        <polygon
          points="40,68 62,68 56,46 34,46"
          fill="#F58220"
          stroke="#F58220"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Tile intermediário superior */}
        <polygon
          points="18,52 38,52 32,32 12,32"
          fill="#F58220"
          stroke="#F58220"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Tile superior direito alongado (asa ascendente) */}
        <polygon
          points="50,44 94,44 86,16 42,16"
          fill="#F58220"
          stroke="#F58220"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark e Tagline */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline">
          <span
            className={`font-black tracking-tight text-2xl font-sans ${
              isDark ? 'text-white' : 'text-[#2B2B2B]'
            }`}
            style={{ letterSpacing: '-0.02em' }}
          >
            Berra
          </span>
        </div>
        {variant === 'full' && (
          <span
            className={`text-[9px] font-semibold tracking-wider uppercase mt-1 ${
              isDark ? 'text-neutral-300' : 'text-[#666666]'
            }`}
          >
            Análise e Otimização de Processos de Negócio
          </span>
        )}
      </div>
    </div>
  )
}
