import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LayoutNavigasi from './pages/layouts/LyoutNavigasi'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Complete from './pages/Complete'
import Pending from './pages/Pending'
import About from './pages/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutNavigasi />}>
          <Route index element={<Home />} />
          <Route path="complete" element={<Complete />} />
          <Route path="pending" element={<Pending />} />
          <Route path='about' element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
