import NavButtonComponent from "./NavButtonComponent";
export default function NavBarComponent() {

    

    return <>

        <nav className="flex gap-6 justify-center mb-6">

            <NavButtonComponent to='/'>Inicio</NavButtonComponent>
            <NavButtonComponent to='/Contacto'>Contacto</NavButtonComponent>
            <NavButtonComponent to='/Servicios'>Servicios</NavButtonComponent>
            
        </nav>

    </>

}