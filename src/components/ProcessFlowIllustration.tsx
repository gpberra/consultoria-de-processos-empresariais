import React from 'react'

export default function ProcessFlowIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Círculos decorativos e brilho laranja sutil */}
      <div className="absolute w-72 h-72 rounded-full bg-[#F58220]/15 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute w-56 h-56 rounded-full bg-[#2B2B2B]/10 blur-2xl pointer-events-none" />

      {/* SVG Interativo com Nós, Conexões e Animação suave na identidade Berra */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl select-none"
      >
        <defs>
          <linearGradient id="berra-grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2B2B2B" />
            <stop offset="100%" stopColor="#1E1E1E" />
          </linearGradient>
          <linearGradient id="berra-grad-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F58220" />
            <stop offset="100%" stopColor="#FF9E4A" />
          </linearGradient>
          <linearGradient id="berra-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2B2B2B" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F58220" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2B2B2B" stopOpacity="0.3" />
          </linearGradient>
          <filter id="berra-shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Linhas de conexão do fluxo (Grid & Paths) */}
        {/* Linha 1 -> 2 */}
        <path
          d="M 140 120 C 220 120, 220 220, 290 220"
          stroke="url(#berra-line-grad)"
          strokeWidth="3"
          strokeDasharray="6 6"
          className="animate-pulse"
        />
        {/* Linha 2 -> 3 */}
        <path
          d="M 370 220 C 430 220, 430 330, 360 380"
          stroke="url(#berra-line-grad)"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
        {/* Linha 1 -> 4 */}
        <path
          d="M 140 150 C 140 260, 180 320, 190 380"
          stroke="#F58220"
          strokeWidth="2.5"
          strokeOpacity="0.5"
        />
        {/* Linha 4 -> 3 */}
        <path d="M 230 400 L 290 400" stroke="url(#berra-line-grad)" strokeWidth="3" />

        {/* Partículas suaves fluindo pelas linhas (ponto que interliga o fluxo mantido) */}
        <g>
          {/* Ponto principal suave percorrendo o fluxo */}
          <circle r="4.5" fill="#F58220">
            <animateMotion
              path="M 140 120 C 220 120, 220 220, 290 220"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Brilho suave acompanhando o ponto principal */}
          <circle r="7" fill="#F58220" opacity="0.3">
            <animateMotion
              path="M 140 120 C 220 120, 220 220, 290 220"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g>
          {/* Ponto suave no segundo segmento */}
          <circle r="4.5" fill="#F58220">
            <animateMotion
              path="M 370 220 C 430 220, 430 330, 360 380"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="7" fill="#F58220" opacity="0.3">
            <animateMotion
              path="M 370 220 C 430 220, 430 330, 360 380"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* NÓ 1: Mapeamento da Rotina Atual (renderização estável e fixa) */}
        <g filter="url(#berra-shadow)">
          <rect
            x="50"
            y="90"
            width="145"
            height="64"
            rx="12"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <rect x="64" y="106" width="30" height="30" rx="8" fill="#FFF7ED" />
          {/* Lupa em laranja */}
          <circle cx="77" cy="119" r="5" stroke="#F58220" strokeWidth="2" fill="none" />
          <line x1="81" y1="123" x2="86" y2="128" stroke="#F58220" strokeWidth="2" />
          <text x="104" y="118" fill="#2B2B2B" fontSize="12" fontWeight="700">
            Mapeamento
          </text>
          <text x="104" y="132" fill="#52525B" fontSize="10">
            Rotina Atual
          </text>
        </g>

        {/* NÓ 2: Processo Otimizado (Central / Destaque Grafite & Laranja - estável) */}
        <g filter="url(#berra-shadow)">
          <rect
            x="240"
            y="190"
            width="155"
            height="70"
            rx="14"
            fill="url(#berra-grad-dark)"
            stroke="#F58220"
            strokeWidth="2"
          />
          <circle cx="265" cy="225" r="16" fill="#1E1E1E" />
          {/* Símbolo de engrenagem / fluidez */}
          <path
            d="M 261 225 L 269 225 M 265 221 L 265 229"
            stroke="#F58220"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="292" y="218" fill="#FFFFFF" fontSize="13" fontWeight="800">
            Otimização
          </text>
          <text x="292" y="234" fill="#FF9E4A" fontSize="10">
            Processo Ideal
          </text>
          <circle cx="375" cy="205" r="4" fill="#10B981" />
        </g>

        {/* NÓ 4: Solução Web & Automação (estável) */}
        <g filter="url(#berra-shadow)">
          <rect
            x="70"
            y="360"
            width="160"
            height="64"
            rx="12"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <rect x="84" y="376" width="30" height="30" rx="8" fill="#FFF7ED" />
          <circle cx="99" cy="391" r="6" stroke="#F58220" strokeWidth="2" fill="none" />
          <text x="124" y="388" fill="#2B2B2B" fontSize="12" fontWeight="700">
            Solução Web & ERP
          </text>
          <text x="124" y="402" fill="#52525B" fontSize="10">
            Rotinas Integradas
          </text>
        </g>

        {/* NÓ 3: Indicadores & Resultados (estável) */}
        <g filter="url(#berra-shadow)">
          <rect
            x="290"
            y="360"
            width="155"
            height="66"
            rx="12"
            fill="white"
            stroke="#10B981"
            strokeWidth="2"
          />
          <rect x="304" y="377" width="32" height="32" rx="8" fill="#ECFDF5" />
          {/* Check / seta de subida */}
          <path
            d="M 312 396 L 318 401 L 328 387"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="346" y="389" fill="#2B2B2B" fontSize="13" fontWeight="700">
            Medição Real
          </text>
          <text x="346" y="403" fill="#10B981" fontSize="11" fontWeight="600">
            + Eficiência e Clareza
          </text>
        </g>

        {/* Badge Flutuante de Indicador (posição estável, sem animação brusca de bounce) */}
        <g filter="url(#berra-shadow)">
          <rect
            x="315"
            y="70"
            width="135"
            height="36"
            rx="18"
            fill="#2B2B2B"
            stroke="#F58220"
            strokeWidth="1.5"
          />
          <circle cx="332" cy="88" r="5" fill="#F58220" />
          <text x="344" y="92" fill="#FFFFFF" fontSize="10" fontWeight="600">
            Processos Claros
          </text>
        </g>

        {/* Badge Flutuante Inferior - Menos Burocracia (estável) */}
        <g filter="url(#berra-shadow)">
          <rect
            x="30"
            y="250"
            width="125"
            height="32"
            rx="16"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
          <circle cx="44" cy="266" r="4" fill="#F58220" />
          <text x="54" y="270" fill="#2B2B2B" fontSize="10" fontWeight="600">
            Menos Burocracia
          </text>
        </g>
      </svg>
    </div>
  )
}
