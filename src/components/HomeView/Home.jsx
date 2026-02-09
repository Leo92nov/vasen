import LinkerButtonComponent from "../LinkerButtonComponent";
import ServiceCard from "../ServiceCard";
import ImageCarousel from "./ImageCarousel";
import Testimonio from "./Testimonio";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <header>
                <h1 className="text-center mt-4 mb-4 text-4xl italic text-gray-200">
                    Vasen Estética y Bienestar
                </h1>
            </header>

            <section>
                <ImageCarousel></ImageCarousel>
            </section>

            <div className="h-[2px] w-[72%] mt-8 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

            <article className="flex flex-col items-center sm:w-[90%]">
                <h3 className="mt-12 mb-6 text-center text-2xl text-gray-200">
                    Medicina estética, tecnología & tratamientos a tu servicio
                </h3>

                <p className="text-xl w-[80%] ml-auto mr-auto text-gray-200">
                    En Väsen te ofrecemos un espacio exclusivo de estética y bienestar pensado para mujeres y hombres que buscan cuidarse, relajarse y disfrutar de un servicio personalizado. ✨ Nuestro propósito es acompañarte a realzar lo más auténtico y único que hay en vos. 💎 En nuestro centro, la belleza no se impone: se potencia con sutileza, equilibrio y excelencia médica.
                </p>
            </article>

            <div className="h-[2px] w-[72%] mt-12 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

            <h2 className="text-center text-white text-3xl mt-8">
                Conoce nuestros servicios
            </h2>

            <section className="h-auto w-[70%] sm:w-[90%] sm:ml-auto sm: mr-auto mb-16 flex flex-wrap ml-auto mr-auto gap-8 justify-center">
                <Link to="../Facial" state={{ keyword: "Facial" }}>
                    <ServiceCard
                        titulo="Facial"
                        descripcion=" Limpieza profunda que elimina impurezas y células muertas. Mejora la textura y luminosidad de la piel. Ideal para todo tipo de rostros."
                        img="/servicecards/facial.jpg"
                    ></ServiceCard>
                </Link>

                <Link to="../Corporal" state={{ keyword: "Corporal" }}>
                    <ServiceCard
                        titulo="Corporal"
                        descripcion=" Tratamiento corporal diseñado para mejorar tu piel. Ayuda a tonificar y revitalizar el cuerpo. Ideal para acompañar rutinas de cuidado personal."
                        img="/servicecards/corporal.jpg"
                    ></ServiceCard>
                </Link>

                <Link to="../Aparatologia" state={{ keyword: "Aparatologia" }}>
                    <ServiceCard
                        titulo="Aparatología"
                        descripcion="Tecnología avanzada para el cuidado corporal. Ideal para mejorar textura, firmeza y apariencia de la piel. Sesiones rápidas y sin tiempo de recuperación."
                        img="/servicecards/aparato.webp"
                    ></ServiceCard>
                </Link>

                <Link to="../Masajes" state={{ keyword: "Masajes" }}>
                    <ServiceCard
                        titulo="Masajes"
                        descripcion=" Tratamientos de masajes personalizados según tus necesidades. Mejoran la circulación y el descanso corporal. Una experiencia de equilibrio y cuidado."
                        img="/servicecards/masaje.jpg"
                    ></ServiceCard>
                </Link>

                <Link to="../Cejas" state={{ keyword: "Cejas" }}>
                    <ServiceCard
                        titulo="Cejas/Pestañas"
                        descripcion="Servicios pensados para destacar la expresión de tu rostro. Perfilado, lifting y cuidado de cejas y pestañas. Mirada más intensa y prolija."
                        img="/servicecards/cejas.jpg"
                    ></ServiceCard>
                </Link>

                <Link to="../Manicuria" state={{ keyword: "Manicuria" }}>
                    <ServiceCard
                        titulo="Manicuria"
                        descripcion="Tratamientos de manicura pensados para el cuidado de tus manos. Técnica, precisión y productos de calidad. Belleza que se nota en cada detalle."
                        img="/servicecards/manicuria.jpg"
                    ></ServiceCard>
                </Link>

                <Link to="../Medicina" state={{ keyword: "Medicina" }}>
                    <ServiceCard
                        titulo="Medicina"
                        descripcion="Tratamientos médicos para el cuidado de la salud vascular. Cuidado integral de la piel con respaldo médico. Tratamientos médicos orientados a la salud íntima femenina."
                        img="/servicecards/medicina.jpg"
                    ></ServiceCard>
                </Link>
            </section>

            <div className="h-[2px] w-[72%] mt-8 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

            <section className="mt-8"></section>

            <section className="w-[70%] flex flex-col items-center ml-auto mr-auto ">
                <h2 className="mb-8 text-center text-2xl text-gray-200">
                    Lo que dicen nuestros pacientes
                </h2>

                <div className="flex gap-8 justify-center flex-wrap">
                    <Testimonio nombre="Sandra A." rating="⭐⭐⭐⭐⭐" texto="Hermoso lugar!!. Las instalaciones un lujo. Las chicas súper profesionales y atentas, te hacen sentir bienvenida desde el primer momento. Se nota la profesionalidad y el cuidado en cada detalle. ¡Super recomendado!" servicio="HIFU" img="/hometestimoniois/ana.png" />
                    <Testimonio nombre="Debora M." rating="⭐⭐⭐⭐⭐" texto="“Excelente atención desde el primer momento. Me explicaron todo y el resultado del tratamiento realmente me sorprendió. El ambiente es muy cálido.”" servicio="Mesoterapia" img="/hometestimoniois/andi.png" />
                    <Testimonio nombre="Rosa M." rating="⭐⭐⭐⭐⭐" texto="Muy conforme con los resultados. Se nota el profesionalismo y el cuidado en cada detalle. Me explicaron bien durante todo el proceso y hay cambios que se notan desde la primera sesión." servicio="Bioestimuladores" img="/hometestimoniois/barbie.png" />
                    <Testimonio nombre="Agustina F." rating="⭐⭐⭐⭐⭐" texto="“Llegué con muchas dudas y me fui tranquila y feliz con el resultado. Hay mucha atención al detalle y en el lugar se respira tranquilidad.”" servicio="Relleno de Labios" img="/hometestimoniois/nena.png" />
                    <Testimonio nombre="Florencia B." rating="⭐⭐⭐⭐⭐" texto="“El trato fue excelente y muy profesional. Me sentí cómoda en todo el procedimiento y los resultados se ven muy naturales. Super conforme.”" servicio="Toxina Botulínica" img="/hometestimoniois/chica.png" />
                    <Testimonio nombre="Ernesto L." rating="⭐⭐⭐⭐⭐" texto="“Muy buena experiencia. El espacio es impecable, la atención es muy profesional, y los resultados se sienten de forma progresiva y natural. Totalmente recomendable.”" servicio="Masaje Deportivo" img="/hometestimoniois/ern.png" />
                </div>
            </section>

            <div className="h-[2px] w-[72%] mt-12 mx-auto bg-gradient-to-r from-[#B8961E] via-[#E6C97A] to-[#B8965E]"></div>

            <section className="w-[100%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] mr-auto ml-auto mt-8">
                <h2 className="text-white text-3xl text-center">
                    No dudes en contactarnos para coordinar una consulta o informarte sobre nuestros tratamientos
                </h2>

                <article className="pl mt-8">
                    <div className="absolute mt-40 ml-4 2xl:mt-40 2xl:ml-40 sm:mt-40 sm:ml-10">
                        <h3 className="text-white text-l sm:text-2xl">Solicitá tu Turno</h3>

                        <div className="mt-4">
                            <LinkerButtonComponent to="/Contacto">
                                <button className="bg-[#57574C] rounded-xl p-2 sm:p-3 font-bold">
                                    Contactanos
                                </button>
                            </LinkerButtonComponent>
                        </div>
                    </div>

                    <div className="">
                        <img className="w-full h-[400px] object-fill hidden sm:block" src="/homeancho.png" alt="" />
                        <img className="w-full h-[400px] object-fill sm:hidden" src="/homeanchosm.png" alt="" />
                    </div>
                </article>
            </section>
        </>
    );
}