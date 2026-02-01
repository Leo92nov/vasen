import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from './components/navigation/NavBarComponent'
import Home from './components/HomeView/Home'
import Contacto from './components/ContactoView/Contacto'
import Facial from './components/FacialView/Facial'
import Corporal from './components/CorporalView/Corporal'
import Nosotras from './components/NosotrasView/Nosotras'
import SingleServ from './components/SingleServ'
import Aparatologia from './components/AparatologiaView/Aparatologia'
import Masajes from './components/MasajesView/Masajes'
import Cejas from './components/CejasView/Cejas'
import Manicuria from './components/ManicuriaView/Manicuria'
import Medicina from './components/MedicinaView/Medicina'


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
      <Route exact path='/Corporal/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Aparatologia' element={<Aparatologia/>}></Route>
      <Route exact path='/Aparatologia/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Masajes/' element={<Masajes/>}></Route>
      <Route exact path='/Masajes/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Cejas/' element={<Cejas/>}></Route>
      <Route exact path='/Cejas/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Manicuria/' element={<Manicuria/>}></Route>
      <Route exact path='/Manicuria/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Cejas/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Medicina/' element={<Medicina/>}></Route>
      <Route exact path='/Medicina/:servid' element={<SingleServ/>}></Route>
      <Route exact path='/Nosotras' element={<Nosotras></Nosotras>}></Route>
    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
