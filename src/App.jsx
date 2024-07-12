
import {Route,  BrowserRouter, Routes,} from 'react-router'
import './App.css'
import Blog from './pages/Blog/Blog'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Works/>} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
     
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
