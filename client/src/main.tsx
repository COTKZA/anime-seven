import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import routers from './routers/routers.tsx'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
