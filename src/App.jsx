
import {Route,  BrowserRouter, Routes,} from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog/Blog'
import Works from './pages/Works/Works'
import Contact from './pages/Contact/Contact'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
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
