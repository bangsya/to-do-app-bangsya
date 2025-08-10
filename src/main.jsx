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
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'
import { Provider } from 'react-redux'
import store from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutNavigasi />}>
            <Route index element={<Home />} />
            <Route path="complete" element={<Complete />} />
            <Route path="pending" element={<Pending />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="edit/:id" element={<EditTodo />} />
            <Route path='about' element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
