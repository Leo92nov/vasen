import FormularioContactoComponent from "./FormularioContactoComponent";
import MapaComponent from "./MapaComponent";

export default function Contacto (){

    return <>
    <div className="bg-red-500">Contacto</div>

    <div className="flex items-center justify-around">

        <FormularioContactoComponent></FormularioContactoComponent>
        <MapaComponent></MapaComponent>
        
    </div>
        
    </>
}