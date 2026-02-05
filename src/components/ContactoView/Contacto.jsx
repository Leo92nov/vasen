import FormularioContactoComponent from "./FormularioContactoComponent";
import MapaComponent from "./MapaComponent";
import ContactCarousel from "./ContactCarousel"
import { Link } from "react-router-dom";

export default function Contacto() {

    return <>

        <h1 className="text-white text-3xl text-center pb-8" >Tu momento Vasen empieza acá</h1>
        <section className="mb-12 w-[70%] mr-auto ml-auto">

            <div className="flex gap-4 w-full">
                <div classNam="w-1/2">
                    <FormularioContactoComponent></FormularioContactoComponent>
                </div>
                <div className="w-1/2 mt-12">
                    <MapaComponent></MapaComponent>
                    <div className="flex justify-start items-center mt-2 gap-3">
                        <img className="h-4 mt-2" src="../../src/assets/svgs/pin.png" alt="" />
                        <h2 className="flex gap-2 text-white text-l mt-2">Federacion 2787, Funes, Santa Fe 2132</h2>
                    </div>


                    <h2 className="flex gap-2 text-white mt-2"><img src="../../src/assets/svgs/llamar.png" alt="" />+54 9 341 284-1882</h2>

                    <div className="flex items-center mt-2">
                        <img className="w-4 h-4" src="../../src/assets/svgs/ig.png" alt="" />
                        <h2 className="text-white ml-4 hover:scale-105"><Link to="https://www.instagram.com/vasenestetica/">vasenestetica</Link></h2>
                    </div>
                    <div>
                        <h2 className="text-white text-l mt-2">Atención: Lunes a viernes: 09:00 hs. a 20:00 hs.</h2>
                        <h2 className="text-white text-l">Sábados: 09:00 hs. a 14:00 hs.</h2>
                        <h2 className="text-white text-l">Domingos: Cerrado</h2>
                    </div>
                </div>
            </div>
        </section>

        <div className="h-[2px] w-[72%] mt-8 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

        <h2 className="text-white text-3xl text-center mt-8">Acercate a vivir la experiencia</h2>

        <section className="mt-8 ml-auto mr-auto w-[70%] h-800px">

            <section>
                <ContactCarousel></ContactCarousel>
            </section>

            <section className="w-[50%]">

                <h2></h2>
            </section>
        </section>


    </>
}