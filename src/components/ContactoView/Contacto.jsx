import FormularioContactoComponent from "./FormularioContactoComponent";
import MapaComponent from "./MapaComponent";
import ContactCarousel from "./ContactCarousel"
import { Link } from "react-router-dom";



export default function Contacto() {
    
const openInstagramInBrowser = () => {
  window.open(
    "https://www.instagram.com/vasenestetica/",
    "_blank",
    "noopener,noreferrer"
  );
};

const goToInstagram = () => {
  window.location.href =
    "https://www.instagram.com/vasenestetica";
};

    return <>

        <h1 className="text-white sm:text-3xl text-2xl text-center" >Tu momento Vasen empieza acá</h1>
        <section className="mb-12 ml-auto mr-auto w-full
                            2xl:w-[70%] 2xl:mr-auto 2xl:ml-auto 
                            md:w-[700px] md:ml-auto md:mr-auto
                            sm:w-auto "
        >

            <div className="flex ml-auto mr-auto flex-col w-full
                            2xl:flex-row 2xl:gap-4 2xl:w-full md:ml-auto md:mr-auto
                            md:w-[700px] 
                            ">

                <div className="w-full">
                    <FormularioContactoComponent></FormularioContactoComponent>
                </div>
                <div className="flex flex-col mt-8 flex-wrap ml-auto mr-auto
                                md:ml-26 md:ml-auto md:mr-auto
                                2xl:block 2xl:ml-0 2xl:flex-col 2xl:w-1/2 2xl:mt-12">

                    <MapaComponent></MapaComponent>

                    <div className="flex justify-start items-center mt-2 gap-3">
                        <img className="h-4 mt-2" src="../../src/assets/svgs/pin.png" alt="" />
                        <h2 className="flex gap-2 text-white text-l mt-2">Federacion 2787, Funes, Santa Fe 2132</h2>
                    </div>


                    <h2 className="flex text-white mt-2
                                   2xl:mt-2 2xl:flex 2xl:gap-2">
                        <img src="../../src/assets/svgs/llamar.png" alt="" />
                        +54 9 341 284-1882</h2>

                    <div className="flex items-center mt-2">
                        <img className="w-4 h-4 hover:scale-105 cursor-pointer" onClick={goToInstagram} src="../../src/assets/svgs/ig.png" alt="" />
                        <h2 className="text-white ml-4 hover:scale-105 cursor-pointer" onClick={goToInstagram}
                        >vasenestetica</h2>
                    </div>
                    <div>
                        <h2 className="text-white text-l mt-2">Atención: Lunes a viernes: 09:00 hs. a 20:00 hs.</h2>
                        <h2 className="text-white text-l">Sábados: 09:00 hs. a 14:00 hs.</h2>
                        <h2 className="text-white text-l">Domingos: Cerrado</h2>
<button onClick={openInstagramInBrowser}>
  Instagram
</button>
                    </div>
                </div>
            </div>
        </section>

        <div className="h-[2px] w-[72%] mt-8 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

        <h2 className="text-white text-3xl text-center mt-8">Acercate a vivir la experiencia</h2>

        <section className="mt-8 ml-auto mr-auto md:w-[70%] h-800px">

            <section>
                <ContactCarousel></ContactCarousel>
            </section>

            <section className="w-[50%]">

                <h2></h2>
            </section>
        </section>


    </>
}