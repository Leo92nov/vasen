import NavButtonComponent from "./NavButtonComponent";
import NavServiciosComponent from "./NavServiciosComponent"
export default function NavBarComponent() {

    

    return <>

        <nav className="flex gap-6 justify-center mb-6">

            <NavButtonComponent to='/'>Inicio</NavButtonComponent>
            <NavServiciosComponent to='../Facial'>Facial</NavServiciosComponent>
            <NavServiciosComponent to='../Corporal'>Corporal</NavServiciosComponent>
            <NavButtonComponent to='/Nosotras'>Nosotras</NavButtonComponent>
            <NavButtonComponent to='/Contacto'>Contacto</NavButtonComponent>
            
        </nav>

    </>

}