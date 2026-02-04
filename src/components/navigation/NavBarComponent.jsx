import NavButtonComponent from "./NavButtonComponent";
import NavServiciosComponent from "./NavServiciosComponent";
import NavServFacialComponent from "./NavServFacialComponent.jsx";
import NavServAparatologiaComponent from "./NavServAparatologiaComponent.jsx";
import NavServMasajesComponent from "./NavServMasajesComponent.jsx";
import NavServCejasComponent from "./NavServCejasComponent.jsx";
import NavServManicuriaComponent from "./NavServManicuriaComponent.jsx"
import NavServMedicinaComponent from "./NavServMedicinaComponent.jsx"
import { Link } from "react-router-dom"


export default function NavBarComponent() {

    

    return <>

        <nav className="flex gap-6 justify-between mb-6 pl-8 pr-8">

            <section>
                <Link to='/'><img className="h-20" src="../src/assets/logov.png" alt="" /></Link>
            </section>
            <NavButtonComponent to='/'>Inicio</NavButtonComponent>
            <NavServFacialComponent to='../Facial' state={{keyword: "Facial"}} >Facial</NavServFacialComponent>
            <NavServiciosComponent to='../Corporal' state={{keyword: "Corporal"}}>Corporal</NavServiciosComponent>
            <NavServAparatologiaComponent to='../Aparatologia' state={{keyword: "Aparatologia"}}>Aparatología</NavServAparatologiaComponent>
            <NavServMasajesComponent to='../Masajes' state={{keyword: "Masajes"}}>Masajes</NavServMasajesComponent>
            <NavServCejasComponent to='../Cejas' state={{keyword: "Cejas"}}>Cejas/Pestañas</NavServCejasComponent>
            <NavServManicuriaComponent to='../Manicuria' state={{keyword: "Manicuria"}}>Manicuría</NavServManicuriaComponent>
            <NavServMedicinaComponent to='../Medicina' state={{keyword: "Medicina"}}>Medicina</NavServMedicinaComponent>
            <NavButtonComponent to='/Nosotras'>Nosotras</NavButtonComponent>
            <NavButtonComponent to='/Contacto'>Contacto</NavButtonComponent>
            
        </nav>

    </>

}