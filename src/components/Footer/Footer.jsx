import FooterNavComponent from "../navigation/FooterNavComponent";
import FooterSocialComponent from "../navigation/FooterSocialComponent";
import ScrollTop from "../navigation/ScrollTop";


export default function Footer() {

    return <>
        <footer className="bg-black">

            <section className="mt-8  p-8 flex justify-between">

                <section>
                    <div className="h-24 w-60 flex flex-col justify-center items-center mb-4" >
                        <img className="h-[100%] w-25" src="../src/assets/logoF.png" alt="" />
                        <p className="relative before:absolute before:h-[2px]
                    before:w-0 before:bg-[#B8963E] before:transition-all before:duration-350 text-l font-serif font-light bg-gradient-to-r from-[#B8963E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform
                    duration-400 ease-in-out italic">Centro de estetica avanzada</p>
                    </div>
                    <h4 className="text-white text-l mt-4">Vasen Medecina Estética y Bienestar</h4>
                    <h4 className="text-white text-l mt-4">Federación 2787, Funes, Santa Fe</h4>
                    <h4 className="text-white text-l mt-4">Tel: +54 9 341 284-1882</h4>
                </section>
                <section className="pt-16">
                    <ul className="flex flex-col items-start gap-4">
                        <li className="relative text-2xl font-serif font-light bg-gradient-to-r from-[#B8963E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform
                                    duration-400
                                 ease-in-out italic">Links</li>
                        <li>
                            <FooterNavComponent to={'/'}>Inicio <ScrollTop></ScrollTop></FooterNavComponent>
                        </li>
                        <li><FooterNavComponent to='/'>Servicios</FooterNavComponent></li>
                        <li><FooterNavComponent to='/Nosotras'>Nosotras</FooterNavComponent></li>
                        <li><FooterNavComponent to='/Contacto'>Contacto</FooterNavComponent></li>
                    </ul>
                </section>
                <section className="pt-16">

                    <h4 className=" pl-3 text-start relative text-2xl font-serif font-light bg-gradient-to-r from-[#B8963E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform
                               duration-400 ease-in-out italic">
                        Social
                    </h4>
                    <section className="flex items-center justify-center">
                        <section><FooterSocialComponent to="https://www.instagram.com/vasenestetica/"><img className="w-16 h-16" src="../src/assets/ig.svg" alt="" /></FooterSocialComponent></section>
                        <section><FooterSocialComponent to="https://w.app/bouzlu"><img className="w-12 h-12 ml-2" src="../src/assets/wa.svg" alt="" /></FooterSocialComponent></section>
                        <section><FooterSocialComponent to="https://www.facebook.com/"><img className="w-12 h-12 ml-2" src="../src/assets/fb.svg" alt="" /></FooterSocialComponent></section>
                        <section><FooterSocialComponent to="/Contacto"><img className="w-16 h-16" src="../src/assets/pin.svg" alt="" /></FooterSocialComponent></section>
                    </section>
                </section>
                <section className="pt-16">
                    <h4 className="relative text-2xl font-serif font-light bg-gradient-to-r from-[#B8963E] via-[#E6C97A] to-[#B8963E] bg-clip-text text-transparent transition-transform
                               duration-400 ease-in-out italic">Horarios de atención:</h4>
                    <h4 className="text-white text-xl pt-4">Lunes a viernes: 09:00 hs. a 20:00 hs.</h4>
                    <h4 className="text-white text-xl pt-2">Sábados: 09:00 hs. a 14:00 hs.</h4>
                    <h4 className="text-white text-xl pt-2">Domingos: Cerrado</h4>
                </section>

            </section>
            <div className="h-[2px] w-[72%] mt-8 mb-2 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

            <h2 className="text-white flex justify-center items-center">Vasen medicina Estética y Bienestar <img src="../src/assets/svgs/cr.png" alt="" className="w-3 h-3 mr-2 ml-2"/> 2025 Todos los derechos reservados</h2>

        </footer>
    </>
}