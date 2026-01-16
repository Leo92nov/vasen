import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/navigation/NavBarComponent'
import Home from './components/HomeView/Home'
import Contacto from './components/ContactoView/Contacto'
import Servicios from './components/ServiciosView/Servicios'

function App() {
 

  return (
    <>
    <BrowserRouter>

    <NavBarComponent></NavBarComponent>

    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Contacto' element={<Contacto/>}></Route>
      <Route exact path='/Servicios' element={<Servicios/>}></Route>
    </Routes>




    </BrowserRouter>
    </>
  )
}

export default App
