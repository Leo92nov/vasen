import NavButtonComponent from "./NavButtonComponent";
import NavServiciosComponent from "./NavServiciosComponent";
import NavServFacialComponent from "./NavServFacialComponent.jsx";
import NavServAparatologiaComponent from "./NavServAparatologiaComponent.jsx";
import NavServMasajesComponent from "./NavServMasajesComponent.jsx";
import NavServCejasComponent from "./NavServCejasComponent.jsx";
import NavServManicuriaComponent from "./NavServManicuriaComponent.jsx"



export default function NavBarComponent() {

    

    return <>

        <nav className="flex gap-6 justify-between mb-6 pl-8 pr-8">
            <img className="h-20" src="../src/assets/logov.png" alt="" />
            <NavButtonComponent to='/'>Inicio</NavButtonComponent>
            <NavServFacialComponent to='../Facial'>Facial</NavServFacialComponent>
            <NavServiciosComponent to='../Corporal'>Corporal</NavServiciosComponent>
            <NavServAparatologiaComponent to='../Aparatologia'>Aparatología</NavServAparatologiaComponent>
            <NavServMasajesComponent to='../Masajes'>Masajes</NavServMasajesComponent>
            <NavServCejasComponent to='../Cejas'>Cejas/Pestañas</NavServCejasComponent>
            <NavServManicuriaComponent to='../Manicuria'>Manicuría</NavServManicuriaComponent>
            <NavServiciosComponent to='../Manicuria'>Medicina</NavServiciosComponent>
            <NavButtonComponent to='/Nosotras'>Nosotras</NavButtonComponent>
            <NavButtonComponent to='/Contacto'>Contacto</NavButtonComponent>
            
        </nav>

    </>

}