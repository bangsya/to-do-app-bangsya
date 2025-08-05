import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LayoutNavigasi from './pages/layouts/LyoutNavigasi'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Complete from './pages/Complete'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutNavigasi />}>
          <Route index element={<Home />} />
          <Route path="complete" element={<Complete />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
