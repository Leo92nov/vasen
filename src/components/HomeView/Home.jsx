import LinkerButtonComponent from "../LinkerButtonComponent";
import ImageCarousel from "./ImageCarousel";
import Testimonio from "./Testimonio";

export default function Home() {

    return <>

        <header>
            <h1 className="text-center mt-4 mb-4 text-4xl italic text-gray-200">Vasen Estética y Bienestar</h1>
        </header>
        <section>
            <ImageCarousel></ImageCarousel>
        </section>

        <div className="h-[2px] w-[72%] mt-12 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

        <section>

            
        </section>

        <div className="h-[2px] w-[72%] mt-8 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

        <article className="flex flex-col items-center">
            <h3 className="mt-12 mb-4 text-2xl text-gray-200">Medicina estética, tecnología & tratamientos a tu servicio</h3>
            <p className="text-xl w-[80%] ml-auto mr-auto text-gray-200">En Väsen te ofrecemos un espacio exclusivo de estética y bienestar pensado para mujeres y hombres que buscan cuidarse, relajarse y disfrutar de un servicio personalizado. ✨ Nuestro propósito es acompañarte a realzar lo más auténtico y único que hay en vos. 💎 En nuestro centro, la belleza no se impone: se potencia con sutileza, equilibrio y excelencia médica.
            </p>
        </article>
        <div className="h-[2px] w-[72%] mt-8 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>
        <section className="mt-8">

        </section>

        <section className="w-[70%] flex flex-col items-center ml-auto mr-auto ">
            <h2 className="mb-8 text-center text-2xl text-gray-200">Lo que dicen nuestros pacientes</h2>

            <div className="flex gap-8 justify-center flex-wrap">
                <Testimonio nombre="Sandra A." rating="⭐⭐⭐⭐⭐" texto="Hermoso lugar!!. Las instalaciones un lujo. Las chicas súper profesionales y atentas, te hacen sentir bienvenida desde el primer momento. Se nota la profesionalidad y el cuidado en cada detalle. ¡Super recomendado!" servicio="HIFU" img="../../public/hometestimoniois/ana.png" />
                <Testimonio nombre="Debora M." rating="⭐⭐⭐⭐⭐" texto="“Excelente atención desde el primer momento. Me explicaron todo y el resultado del tratamiento realmente me sorprendió. El ambiente es muy cálido.”" servicio="Mesoterapia" img="../../hometestimoniois/andi.png" />
                <Testimonio nombre="Rosa M." rating="⭐⭐⭐⭐⭐" texto="Muy conforme con los resultados. Se nota el profesionalismo y el cuidado en cada detalle. Me explicaron bien durante todo el proceso y hay cambios que se notan desde la primera sesión." servicio="Bioestimuladores" img="../../hometestimoniois/barbie.png" />
                <Testimonio nombre="Agustina F." rating="⭐⭐⭐⭐⭐" texto="“Llegué con muchas dudas y me fui tranquila y feliz con el resultado. Hay mucha atención al detalle y en el lugar se respira tranquilidad.”" servicio="Relleno de Labios" img="../../hometestimoniois/nena.png" />
                <Testimonio nombre="Florencia B." rating="⭐⭐⭐⭐⭐" texto="“El trato fue excelente y muy profesional. Me sentí cómoda en todo el procedimiento y los resultados se ven muy naturales. Super conforme.”" servicio="Toxina Botulínica" img="../../hometestimoniois/chica.png" />
                <Testimonio nombre="Ernesto L." rating="⭐⭐⭐⭐⭐" texto="“Muy buena experiencia. El espacio es impecable, la atención es muy profesional, y los resultados se sienten de forma progresiva y natural. Totalmente recomendable.”" servicio="Masaje Deportivo" img="../../hometestimoniois/ern.png" /></div>
        </section>

        <div className="h-[2px] w-[72%] mt-12 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

        <section className="w-[70%] mr-auto ml-auto mt-8">
            <h2 className="text-white text-3xl text-center">No dudes en contactarnos para coordinar una consulta o informarte sobre nuestros tratamientos</h2>
            <article className="pl mt-8">
                <div className="absolute mt-40 ml-40">
                    <h3 className="text-white text-2xl">Solicitá tu Turno</h3>
                    <div className="mt-4"><LinkerButtonComponent to="/Contacto"><button className="bg-[#57574C] rounded-xl p-3 font-bold">Contactanos</button></LinkerButtonComponent></div>
                </div>
                <div className="">
                    <img className="w-full h-[400px] object-fill " src="./src/assets/homeancho.png" alt="" />
                </div>
            </article>
        </section>
    </>

}