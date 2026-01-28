import ImageCarousel from "./ImageCarousel";

export default function Home() {

    return <>

        <header>
            <h1 className="text-center mt-4 mb-4 text-4xl italic text-white">Vasen Estética y Bienestar</h1>
        </header>
        <section>
            <ImageCarousel></ImageCarousel>
        </section>
        <article className="flex flex-col items-center">
            <h3 className="mt-12 mb-4 text-2xl text-white">Medicina estética, tecnología & tratamientos a tu servicio</h3>
            <p className="text-xl w-[80%] ml-auto mr-auto text-white">En Vasen brindamos tratamientos faciales, corporales y depilación láser definitiva, enfocados en realzar la belleza natural de cada persona.
                Nuestra atención es totalmente personalizada, priorizando siempre la seguridad, la privacidad y el bienestar de cada paciente.
                Trabajamos con un enfoque integral, adaptando cada tratamiento a las necesidades individuales para lograr resultados armoniosos y naturales. 
                Contamos con capacitación continua y tecnología de última generación, lo que nos permite ofrecer procedimientos innovadores, seguros y altamente efectivos.
            </p>
        </article>
    </>

}