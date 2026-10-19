import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

import Layout from './components/Layout'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route element={<Layout />}>
          {/* Landing Page Principal */}
          <Route path="/" element={<Index />} />
        </Route>

        {/* Redirecionamentos de rotas antigas para a página inicial */}
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="/pipeline" element={<Navigate to="/" replace />} />
        <Route path="/forgot-password" element={<Navigate to="/" replace />} />
        <Route path="/reset-password" element={<Navigate to="/" replace />} />
        <Route path="/verify-email" element={<Navigate to="/" replace />} />
        <Route path="/confirm-email-change" element={<Navigate to="/" replace />} />

        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </BrowserRouter>
)

export default App
