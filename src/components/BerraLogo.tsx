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
  /** Classes adicionais para o container ou wrapper */
  className?: string
  /** Classes CSS aplicadas diretamente na imagem do logotipo */
  imageClassName?: string
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
  imageClassName = '',
}: BerraLogoProps) {
  // Se variant for apenas o ícone
  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img src={logoIcon} alt="Berra Ícone" className="w-9 h-9 object-contain" />
      </div>
    )
  }

  // Uso EXATO do arquivo oficial do logotipo fornecido (logo-berra-e2410.png)
  // Em fundos escuros (theme === 'dark', ex: rodapé escuro #2B2B2B), usamos uma base suave clara
  // arredondada e acolchoada para garantir máxima legibilidade e preservação 100% fiel da arte oficial.
  if (theme === 'dark') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm">
          <img
            src={logoFull}
            alt="Berra - Análise e Otimização de Processos de Negócio"
            className="h-8 md:h-9 w-auto max-w-[200px] object-contain select-none"
          />
        </div>
      </div>
    )
  }

  // Fundo claro padrão (Header, Login, Pipeline, Modais, etc.)
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src={logoFull}
        alt="Berra - Análise e Otimização de Processos de Negócio"
        className={imageClassName || 'h-9 md:h-10 w-auto max-w-[220px] object-contain select-none'}
      />
    </div>
  )
}
