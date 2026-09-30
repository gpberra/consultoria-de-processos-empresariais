import { useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, FileQuestion } from 'lucide-react'

const NotFound = () => {
  const location = useLocation()

  useEffect(() => {
    console.warn('Página não encontrada:', location.pathname)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <div className="text-center max-w-md bg-white p-8 sm:p-10 rounded-2xl border border-[#E4E9F0] shadow-xl space-y-5">
        <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto text-[#00B4D8]">
          <FileQuestion className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-[#0F2A43]">404</h1>
          <h2 className="text-lg font-bold text-[#1A2B3C]">Página Não Encontrada</h2>
          <p className="text-xs sm:text-sm text-[#5B6B7C]">
            O endereço que você tentou acessar não existe ou foi movido para outro local.
          </p>
        </div>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0F2A43] hover:bg-[#0A1F33] transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 text-[#00B4D8]" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
