import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import Root from './Layouts/Root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <Root/>
    </RouterProvider>
  </StrictMode>,
)
