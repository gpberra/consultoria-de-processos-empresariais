import React from 'react'

export default function ProcessFlowIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      {/* Círculos decorativos e brilho */}
      <div className="absolute w-72 h-72 rounded-full bg-[#00B4D8]/10 blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute w-56 h-56 rounded-full bg-[#0F2A43]/10 blur-2xl pointer-events-none" />

      {/* SVG Interativo com Nós, Conexões e Animação suave */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl select-none"
      >
        <defs>
          <linearGradient id="grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F2A43" />
            <stop offset="100%" stopColor="#1A3855" />
          </linearGradient>
          <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#90E0EF" />
          </linearGradient>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F2A43" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F2A43" stopOpacity="0.4" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0F2A43" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Linhas de conexão do fluxo (Grid & Paths) */}
        {/* Linha 1 -> 2 */}
        <path
          d="M 140 120 C 220 120, 220 220, 290 220"
          stroke="url(#line-grad)"
          strokeWidth="3"
          strokeDasharray="6 6"
          className="animate-pulse"
        />
        {/* Linha 2 -> 3 */}
        <path
          d="M 370 220 C 430 220, 430 330, 360 380"
          stroke="url(#line-grad)"
          strokeWidth="3"
          strokeDasharray="6 6"
        />
        {/* Linha 1 -> 4 */}
        <path
          d="M 140 150 C 140 260, 180 320, 190 380"
          stroke="#00B4D8"
          strokeWidth="2.5"
          strokeOpacity="0.5"
        />
        {/* Linha 4 -> 3 */}
        <path d="M 230 400 L 290 400" stroke="url(#line-grad)" strokeWidth="3" />

        {/* Partículas fluindo nas linhas */}
        <circle r="4" fill="#00B4D8" className="animate-ping">
          <animateMotion
            path="M 140 120 C 220 120, 220 220, 290 220"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle r="4" fill="#0F2A43">
          <animateMotion
            path="M 370 220 C 430 220, 430 330, 360 380"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* NÓ 1: Input / Diagnóstico */}
        <g filter="url(#shadow)" className="transition-transform duration-300 hover:scale-105">
          <rect
            x="60"
            y="90"
            width="130"
            height="64"
            rx="12"
            fill="white"
            stroke="#E4E9F0"
            strokeWidth="1.5"
          />
          <rect x="74" y="106" width="30" height="30" rx="8" fill="#0F2A43" />
          {/* Ícone de lupa/diagnóstico */}
          <circle cx="87" cy="119" r="5" stroke="#00B4D8" strokeWidth="2" fill="none" />
          <line x1="91" y1="123" x2="96" y2="128" stroke="#00B4D8" strokeWidth="2" />
          <text x="114" y="118" fill="#1A2B3C" fontSize="12" fontWeight="700">
            Entrada
          </text>
          <text x="114" y="132" fill="#5B6B7C" fontSize="10">
            Diagnóstico
          </text>
        </g>

        {/* NÓ 2: Processamento / Otimização (Central) */}
        <g filter="url(#shadow)" className="transition-transform duration-300 hover:scale-105">
          <rect
            x="240"
            y="190"
            width="150"
            height="70"
            rx="14"
            fill="url(#grad-primary)"
            stroke="#00B4D8"
            strokeWidth="2"
          />
          <circle cx="265" cy="225" r="16" fill="#0A1F33" />
          {/* Engrenagens / Fluxo */}
          <path
            d="M 261 225 L 269 225 M 265 221 L 265 229"
            stroke="#00B4D8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="292" y="218" fill="#FFFFFF" fontSize="13" fontWeight="800">
            Otimização
          </text>
          <text x="292" y="234" fill="#90E0EF" fontSize="10">
            Redesenho BPMN
          </text>
          <circle cx="370" cy="205" r="4" fill="#00A86B" />
        </g>

        {/* NÓ 4: Automação / Validação */}
        <g filter="url(#shadow)">
          <rect
            x="90"
            y="360"
            width="140"
            height="64"
            rx="12"
            fill="white"
            stroke="#E4E9F0"
            strokeWidth="1.5"
          />
          <rect x="104" y="376" width="30" height="30" rx="8" fill="#EEF2FF" />
          <circle cx="119" cy="391" r="6" stroke="#4F46E5" strokeWidth="2" fill="none" />
          <text x="144" y="388" fill="#1A2B3C" fontSize="12" fontWeight="700">
            Automação
          </text>
          <text x="144" y="402" fill="#5B6B7C" fontSize="10">
            Fluxos Digitais
          </text>
        </g>

        {/* NÓ 3: KPIs & Resultados */}
        <g filter="url(#shadow)" className="transition-transform duration-300 hover:scale-105">
          <rect
            x="290"
            y="360"
            width="150"
            height="66"
            rx="12"
            fill="white"
            stroke="#00A86B"
            strokeWidth="2"
          />
          <rect x="304" y="377" width="32" height="32" rx="8" fill="#ECFDF5" />
          {/* Check / Gráfico subindo */}
          <path
            d="M 312 396 L 318 401 L 328 387"
            fill="none"
            stroke="#00A86B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text x="346" y="389" fill="#1A2B3C" fontSize="13" fontWeight="700">
            Resultados
          </text>
          <text x="346" y="403" fill="#00A86B" fontSize="11" fontWeight="600">
            +3x Eficiência
          </text>
        </g>

        {/* Badge Flutuante de Indicador */}
        <g filter="url(#shadow)" className="animate-bounce" style={{ animationDuration: '4s' }}>
          <rect
            x="320"
            y="70"
            width="120"
            height="36"
            rx="18"
            fill="#0F2A43"
            stroke="#00B4D8"
            strokeWidth="1"
          />
          <circle cx="336" cy="88" r="5" fill="#00B4D8" />
          <text x="348" y="92" fill="#FFFFFF" fontSize="10" fontWeight="600">
            98% SLA Atingido
          </text>
        </g>

        {/* Badge Flutuante Inferior */}
        <g filter="url(#shadow)">
          <rect
            x="40"
            y="250"
            width="110"
            height="32"
            rx="16"
            fill="#FFFFFF"
            stroke="#E4E9F0"
            strokeWidth="1"
          />
          <circle cx="54" cy="266" r="4" fill="#F59E0B" />
          <text x="64" y="270" fill="#1A2B3C" fontSize="10" fontWeight="600">
            Auditoria OK
          </text>
        </g>
      </svg>
    </div>
  )
}
