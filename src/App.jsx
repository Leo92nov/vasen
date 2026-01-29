import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/navigation/NavBarComponent'
import Home from './components/HomeView/Home'
import Contacto from './components/ContactoView/Contacto'
import Facial from './components/FacialView/Facial'
import Corporal from './components/CorporalView/Corporal'
import Nosotras from './components/NosotrasView/Nosotras'
import SingleServ from './components/SingleServ'

function App() {


  return (
    <>
    <BrowserRouter>

    <NavBarComponent></NavBarComponent>

    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Contacto' element={<Contacto/>}></Route>
      <Route exact path='/Facial' element={<Facial/>}></Route>
      <Route exact path='/Facial/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Corporal' element={<Corporal/>}></Route>
      <Route exact path='/Nosotras' element={<Nosotras></Nosotras>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
