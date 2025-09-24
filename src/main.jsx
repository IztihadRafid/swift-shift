import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist max-w-[1500px] mx-auto bg-gray-200'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
