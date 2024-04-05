import  './index.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

import Home from './Pages/Home'
import About from './Pages/About'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Spells from './Pages/Spells'
import Game from './Pages/Game'
import Footer from './Components/Footer'


function App() {


  return (
    <>
      <div className="bg">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/spells' element={<Spells/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
