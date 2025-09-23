import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import routes from './routes/routes.tsx'
import AuthProvider from './context/AuthProvider.tsx'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
  </StrictMode>,
)
