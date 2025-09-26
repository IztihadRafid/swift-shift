import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-[1500px] mx-auto bg-gray-200'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>,
)
